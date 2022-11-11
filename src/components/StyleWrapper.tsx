import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const StyleWrapper = ({ children }: Props) => {
  return (
    <>
      {/* <EmotionGlobal
        styles={{
          ".grid-item": {
            // padding: "1rem", interesting overlap
            margin: "1rem",
            cursor: "pointer",
            width: "100%",
            height: "100%",
            position: "relative",
          },
          ".grid-item:nth-of-type(1)": {
            gridColumnStart: 3,
            gridRowStart: 3,
          },
          ".grid-item:nth-of-type(6)": {
            gridColumnStart: 6,
          },
          ".grid-item:nth-of-type(9)": {
            gridRowStart: 6,
          },
          ".grid-item:nth-of-type(11)": {
            gridColumnStart: -30,
            gridRowStart: 9,
          },
        }}
      /> */}
      {children}
    </>
  );
};
