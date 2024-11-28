import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";



import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    // title: asText(page.data.title),
    // description: page.data.meta_description,
    // openGraph: {
    //   title: page.data.meta_title ?? undefined,
    //   images: [{ url: page.data.meta_image.url ?? "" }],
    // },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return (
    <div>
      <PrismicRichText field={page.data.title} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
    
  )
  
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
