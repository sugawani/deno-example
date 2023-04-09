import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div>
      <p>Woops! {url.pathname} is not found... 😢</p>
    </div>
  );
}
