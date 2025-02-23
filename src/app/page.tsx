import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { createClient } from "../prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());
  const projects = await client.getAllByType("project");

  return (
    <div>
      <div className="projects">
        {projects.map((item, i) => {
          return (
            <a href={`/${item.uid}`} className="project-item" key={`project${i}`}>
              <PrismicNextImage field={item.data.project_image} />
              <h3>{item.data.project_title}</h3>
              <h2>
                {
                  // Safely access rich text field and extract text
                  item.data.project_descrption?.map((node, index) => {
                    // Check if node is a text node or paragraph node
                    if ( node.type === "paragraph") {
                      return (
                        <span key={index}>
                          {node.text?.split(" ").slice(0, 20).join(" ")} [...]
                        </span>
                      );
                    }
                    return null;
                  })
                }
              </h2>
              <h3>{item.data.students_name}</h3>
            </a>
          );
        })}
      </div>
      <SliceZone slices={page.data.slices} components={{}} />
    </div>
  );
}
