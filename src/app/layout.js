import Footer from "@/components/organisms/layout/Footer";
import "./globals.css";
import Header from "@/components/organisms/layout/Header";
import AuthModals from "@/components/templates/layout/AuthModals";
import Provider from "@/core/providers/Provider";
import SideBar from "@/components/templates/layout/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scrollbar-custom">
      <body className="font-dana-regular bg-background text-dark flex h-svh flex-col items-center justify-between">
        <Provider>
          <Header />
          <AuthModals />
          <SideBar />
          {children}
          <Footer />
          <span className=" w-full py-2 text-center max-sm:text-xs">
            کلیه حقوق این وب سایت متعلق به تورینو میباشد.
          </span>
        </Provider>
      </body>
    </html>
  );
}
