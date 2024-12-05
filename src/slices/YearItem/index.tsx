import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `YearItem`.
 */
export type YearItemProps = SliceComponentProps<Content.YearItemSlice>;

/**
 * Component for "YearItem" Slices.
 */
const YearItem = ({ slice }: YearItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for year_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default YearItem;
