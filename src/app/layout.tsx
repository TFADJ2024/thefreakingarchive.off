import "./about.css"; 
import "./category-years.css"; 
import "./footer.css"; 
import "./header.css"; 
import "./project-style.css"; 
import "./style.css"; 


import { Inter } from "next/font/google";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";


import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
<div className="navigation-bar">
{navigation.data.links.map((item) => (
 <PrismicNextLink field={item.link}>
  <PrismicRichText field={item.label} />
  </PrismicNextLink>
))}
</div>
  );
  
}

<div className="flex justify-center items-center w-screen bg-greenGrey">
  <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
  </div>
</div>
