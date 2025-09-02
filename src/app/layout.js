import Footer from "@/components/organisms/Footer";
import "../style/globals.css";
import Header from "@/components/organisms/Header";
import AuthModals from "@/components/templates/AuthModals";
import Provider from "@/core/providers/Provider";
import SideBar from "@/components/templates/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-dana-regular bg-background text-dark flex h-svh flex-col items-center justify-between">
        <Provider>
          <Header />
          <AuthModals />
          <SideBar />
          <main className="w-full flex-1">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
