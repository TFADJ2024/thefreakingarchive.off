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
import Head from "next/head";

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
        <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");
  const scrollbar = await client.getSingle("marquee");

  return (
    <div>
      <div className="scroll-bar">
        <PrismicRichText field={scrollbar.data.marquee} />
      </div>
      <div className="title">
        <h1 className="title-page">
          The GDA Freaking Archive 
        </h1>
      </div>
      <div className="navigation-bar">
        {navigation.data.links.map((item,i) => (
        <PrismicNextLink field={item.link} key={`link${i}`}> <PrismicRichText field={item.label}/></PrismicNextLink>
        ))}
      </div>
    </div>

  );
}

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <div>
      <footer className="credits">
      <PrismicRichText field={footer.data.footer_credits} />
      </footer>
    </div>

  );
  
}
