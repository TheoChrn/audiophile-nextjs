import Navigation from "@/components/Navigation/navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";
import Providers from "./contexts/providers";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import CheckIcon from "@/components/Icons/checkIcon";

const inter = Manrope({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Audiophile e-commerce website",
    default: "Home",
  },
  description:
    "Théo CHÉRON, développeur Front-End Nextjs / ReactJs diplômé Openclassrooms.",
  applicationName: "Next.Js",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Javascript",
    "Tailwind",
    "Tailwindcss",
    "Tanstack query",
    "React query",
    "Zustand",
    "Zod",
    "Shadcn UI",
    "Front End mentor",
  ],
  authors: [{ name: "Théo", url: "https://theo-cheron.fr" }],
  publisher: "Théo CHÉRON",
  creator: "Théo CHÉRON",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
        <Toaster
          icons={{
            success: <CheckIcon size={20} />,
          }}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "bg-primary border border-gray-200 shadow-xl flex py-6 px-10 items-center gap-4 w-[90%] sm:w-full sm:max-w-[35rem] rounded",
              title: "text-base text-primary-body",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
