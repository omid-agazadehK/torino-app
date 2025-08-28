import "../style/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-dana-medium">{children}</body>
    </html>
  );
}
