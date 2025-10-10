import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ToastNotification from "@/components/ui/ToastNotification";

export const metadata: Metadata = {
  title: "Chat_Online-SWR-NEXT",
  description: "Chat de prueba con SWR",
};

export default function RootLayout({
  children,
}:{children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Header />
        <div className="p-2">
          {children}
        </div>

        <ToastNotification />
      </body>
    </html>
  );
}
