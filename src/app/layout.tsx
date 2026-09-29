import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matrix Holding - Kiến tạo Hệ sinh thái Kinh doanh Đa ngành",
  description:
    "Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam.",
  openGraph: {
    title: "Matrix Holding - Kiến tạo Hệ sinh thái Kinh doanh Đa ngành",
    description:
      "Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
