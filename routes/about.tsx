import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function About() {
  return (
    <div>
      <h1>Woah! It's About Page!</h1>
    </div>
  );
}
