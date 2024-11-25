import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectText`.
 */
export type ProjectTextProps = SliceComponentProps<Content.ProjectTextSlice>;

/**
 * Component for "ProjectText" Slices.
 */
const ProjectText = ({ slice }: ProjectTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectText;
