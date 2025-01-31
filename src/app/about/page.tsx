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

export default async function About() {
  const client = createClient();
  const page = await client.getAllByType("about").catch(() => notFound());
  const about = await client.getAllByType ("about");

  console.log(about[0].data.email)

  return (
    <div>
      <div className="content-wrapper">
        {about.map((item,i)=> {
          return (
           
            <div className="content-wrapper-1" key={`item${i}`}>
              <h1><PrismicRichText field={item.data.titleone}/></h1>
              <p><PrismicRichText field={item.data.descriptionone} /></p>
              <PrismicNextImage field={item.data.image}/>
            </div>
            
          )
        })}
      </div>

      <div>
      <div className="content-wrapper">
        {about.map((item,i)=> {
          return (
           
            <div className="content-wrapper-2" key={`item2${i}`}>
              <p><PrismicRichText field={item.data.descriptiontwo} /> </p>

            </div>
            
          )
        })}
      </div>
    </div>
     
     
    <div>
      <div className="content-wrapper">
        {about.map((item,i)=> {
          return (
           <>
         <div className="documentation" key={`documentation${i}`}>
            <h2><PrismicRichText field={item.data.subtitle} /></h2>
            <div 
              className="iframe" 
              dangerouslySetInnerHTML={{ __html: item.data.video.html ?? '' }} // Fallback to an empty string if null
            />
          </div>

            </>
           
          )
        })}
      </div>

      <div className="contact">
        {about.map((item,i)=> {
            return (
              <div className="documentation" id="contact" key={`contact${i}`}>
                <h2 className="contact"><PrismicRichText field={item.data.contact} /></h2>
                <a href={item.data.email.text} >info@thefreakingarchive.com 
                  </a>
              </div>
            )
          })}
      </div>
    </div>
    </div>
  )

  

  




  
}

