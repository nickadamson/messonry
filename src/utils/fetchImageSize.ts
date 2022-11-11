import { IncomingMessage } from "http";
import https from "https";
import url from "url";

import * as imageSize from "image-size";

import { Dimensions } from "../utils";

imageSize.disableFS(true);
const sizeOf = imageSize.imageSize;

// https://github.com/image-size/image-size/issues/258
async function getStreamImageSize(stream: IncomingMessage, src: string) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
    try {
      /* stop requesting data after dimensions are known */
      // console.log("dimensions found early", src);
      return sizeOf(Buffer.concat(chunks));
    } catch (error) {
      /* Not enough buffer to determine sizes yet */
    }
  }

  console.log("fetched entire image");
  return sizeOf(Buffer.concat(chunks));
}

export const fetchImageSize = async (imageUrl: string): Promise<Dimensions> => {
  const options = url.parse(imageUrl);

  const promise = new Promise<Dimensions>((resolve, reject) => {
    let w = 0;
    let h = 0;

    https.get(options, async (stream) => {
      const { width, height } = await getStreamImageSize(stream, imageUrl);

      if (width && height) {
        w = width;
        h = height;
      } else {
        console.log("promise rejected");
        reject({ reason: "could not determine image size from buffer" });
      }
    });

    resolve({ width: w, height: h });
  });

  return promise
    .then((result) => result)
    .catch((error) => {
      console.log(error);
      return { width: 0, height: 0 };
    });
};
