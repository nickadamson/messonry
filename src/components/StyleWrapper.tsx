/** @jsxImportSource @emotion/react */
import { Global as EmotionGlobal } from "@emotion/react";
import React from "react";

export const StyleWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <EmotionGlobal
        styles={{
          ".grid-item": {
            margin: "1rem",
            cursor: "pointer",
            width: "100%",
            height: "100%",
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
      />
      {children}
    </>
  );
};
