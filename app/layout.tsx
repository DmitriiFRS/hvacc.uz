import type { Metadata } from "next";
import "./globals.css";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import { StoreProvider } from "./Common/Redux/StoreProvider";
import localFont from "next/font/local";

const circle = localFont({
   src: [
      {
         path: "./fonts/CircleWelkin/Circe-Bold.ttf",
         weight: "700",
         style: "normal",
      },
      {
         path: "./fonts/CircleWelkin/Circe-ExtraBold.ttf",
         weight: "800",
         style: "normal",
      },
      {
         path: "./fonts/CircleWelkin/Circe-ExtraLight.ttf",
         weight: "200",
         style: "normal",
      },
      {
         path: "./fonts/CircleWelkin/Circe-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "./fonts/CircleWelkin/Circe-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "./fonts/CircleWelkin/Circe-Thin.ttf",
         weight: "100",
         style: "normal",
      },
   ],
});

export const metadata: Metadata = {
   title: "Climate solution",
   description: "Midea asia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="ru">
         <StoreProvider>
            <body className={circle.className}>
               <div className="wrapper">
                  <Header />
                  <main className="main">{children}</main>
                  <Footer />
               </div>
            </body>
         </StoreProvider>
      </html>
   );
}
