import { rest } from "msw";
import { posts1, posts2, posts3 } from "./posts";
import fakeimage from "./images/fakeimage.jpg";
import regeneratorRuntime from "regenerator-runtime";
import { baseUrl } from "../base-url";

//   req.url.searchParams.get("page"),
//   req.url.searchParams.get("top")

export const handlers = [
  rest.get(baseUrl, (req, res, ctx) => {
    console.log(req.url.searchParams.get("page"), "page");
    if (req.url.searchParams.get("page") == 1) {
      return res(ctx.json(posts1));
    }
    if (req.url.searchParams.get("page") == 2) {
      return res(ctx.json(posts2));
    }
    if (req.url.searchParams.get("page") == 3) {
      return res(ctx.json(posts3));
    }
    return res(ctx.json([]));
  }),

  rest.get("http://localhost:8000/image/fakeimage.jpg", async (_, res, ctx) => {
    // Convert "base64" image to "ArrayBuffer".
    const imageBuffer = await fetch(fakeimage).then((res) => res.arrayBuffer());
    return res(
      ctx.set("Content-Length", imageBuffer.byteLength.toString()),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
];
