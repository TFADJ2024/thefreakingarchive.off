import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

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
  const page = await client.getAllByType("years").catch(() => notFound());
  const projects = await client.getAllByType ("project");
  const tags = await client.getTags();

  return (
    <div>
      <div className="content-wrapper">
      {tags.map((item,i)=> {
        return (
          <div className="tag" key={`tag${i}`}>
            
            {projects.filter((project) => project.tags.includes(item)).length > 0  &&
              <>
              {item}
              <div className="divider"></div>
              <div className="project-wrapper">
                {projects.filter((project) => project.tags.includes(item)).map((item,i)=> {
                  return (

                      <a href={`/${item.uid}`}  className="project-link" key={`project${i}`}>
                          <div className="project-item">
                          <PrismicNextImage field={item.data.project_image} />
                          <h3 className="project-title">{item.data.project_title}</h3>
                          <h2 className="project-description">{item.data.project_descrption?.[0]?.text?.split(" ").slice(0,20).join(' ')}[...]</h2> 
                          <h3 className="student-name">{item.data.students_name}</h3>
                          </div>
                      </a>
                )})}
              </div>
              </>
            }
          </div>
         
          )
        }
      )
      }
      

      </div>
    </div>
  )

}