import { Hono } from "hono";
import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";
import Hello from "@/components/hello.astro";

const app = new Hono().basePath("/api/");
const container = await experimental_AstroContainer.create();

app.get("/hello", async (c) => {
  const helloComponent = container.renderToString(Hello);
  return c.text(await helloComponent);
});

export const ALL: APIRoute = async ({ request }) => {
  return app.fetch(request);
};
