import { Handlers, PageProps } from "$fresh/server.ts";
import Loading from "../../islands/Loading.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function GithubPage({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>user not found</h1>;
  }

  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.name}</p>
      <Loading />
    </div>
  );
}
