import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Props for `ProjectImages`.
 */
export type ProjectImagesProps =
  SliceComponentProps<Content.ProjectImagesSlice>;

/**
 * Component for "ProjectImages" Slices.
 */
const ProjectImages = ({ slice }: ProjectImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <PrismicNextImage field={slice.primary.projectimage} />
    </section>
  );
};

export default ProjectImages;
