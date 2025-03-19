import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { createClient } from "../../prismicio";
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
  const projects = await client.getAllByType("project");

  // Group projects by year
  const groupedByYear = projects.reduce((acc, project) => {
    const year = project.data.year;
    
    // Handle null or undefined year by giving it a fallback value like "Unknown"
    const yearKey = year ?? "Unknown"; // Fallback to "Unknown" if year is null or undefined
    
    if (!acc[yearKey]) {
      acc[yearKey] = [];
    }
    acc[yearKey].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const sortedYears = Object.keys(groupedByYear).sort(); // Sort years in ascending order

  return (
    <div>
      <div className="content-wrapper">
        {/* Display each year with its projects */}
        {sortedYears.map((year) => (
          <div key={year} className="year-section tag" id="tag">
            <h2 className="year-title">{year !== "Unknown" ? year : "No Year Available"}</h2>
            <div className="divider"></div>
            <div className="project-wrapper">
              {groupedByYear[year].map((project, projectIndex) => {
                // Find the first paragraph in project_description
                const firstParagraph = project.data.project_descrption?.find(
                  (node) => node.type === "paragraph"
                );

                return (
                  <a
                    href={`/${project.uid}`}
                    className="project-link"
                    key={`project-${projectIndex}`}
                  >
                    <div className="project-item">
                      <PrismicNextImage field={project.data.project_image} />
                      <h3 className="project-title">{project.data.project_title}</h3>
                      <h2 className="project-description">
                        {firstParagraph && (
                          <span>
                            {firstParagraph.text?.split(" ").slice(0, 20).join(" ")} [...]
                          </span>
                        )}
                      </h2>
                      <h3 className="student-name">{project.data.students_name}</h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
