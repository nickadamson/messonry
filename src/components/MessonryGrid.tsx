import React from "react";

import GridItem, { Item } from "./GridItem";

type MessonryOptions = {
  placeholder: boolean;
};

export type MessonryGridProps = {
  items: Item[];
  options: MessonryOptions;
};

/**       ---  Dual-axis Masonry Layout  ---
 *             Creates a 100x100 grid.
 *      Fills it tetris-style, while respecting
 *           the media's aspect ratio
 */

const MessonryGrid: React.FC<MessonryGridProps> = ({ items, options }): JSX.Element => {
  console.log({ items, options });
  return (
    <div>
      <div>
        {items.map((item, idx) => {
          return <GridItem key={`MessonryGridItem-${idx}`} item={item} options={options ? options : undefined} />;
        })}
      </div>
    </div>
  );
};

export default MessonryGrid;
