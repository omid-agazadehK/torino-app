import Footer from "@/components/organisms/Footer";
import "../style/globals.css";
import Header from "@/components/organisms/Header";
import TenStackReactQuery from "@/components/providers/TenStackReactQuery";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-dana-regular h-svh flex flex-col justify-between items-center bg-background text-dark">
        <TenStackReactQuery>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </TenStackReactQuery>
      </body>
    </html>
  );
}
