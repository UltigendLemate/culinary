import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Culinary League",
  description: "Culinary League by Hammer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
      <Script id="hyperleap-chatbot" strategy="afterInteractive">
        {`
          (function () {
            // Define chatbot configuration
            window.userChatbotConfig = {
              chatbotId: "fbe732ff-f86e-42cd-abd6-97ae448da5a3",
              privateKey: "ZmJlNzMyZmZmODZlNDJjZGFiZDY5N2FlNDQ4ZGE1YTNfMTg1Mjg=",
            };
            // Dynamically load chatbot plugin
            var chatbotScript = document.createElement("script");
            chatbotScript.src = "https://chatjs.hyperleap.ai/chatbot.min.js";
            chatbotScript.async = true; // Load asynchronously for better performance
            document.head.appendChild(chatbotScript);
          })();
        `}
      </Script>
    </html>
  );
}
