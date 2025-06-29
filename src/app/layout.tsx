import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300" ,"400", "500", "600", "700", "800", "900"]
});


export const metadata: Metadata = {
    title: "Wishbone",
    description: "The home of beautiful architecture",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            </Head>
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
