import { UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div>
      <Head>
        <meta http-equiv="refresh" content="5;url=/" />
      </Head>
      <p>Woops! {url.pathname} is not found... 😢</p>
      <p>Redirect index after 5minutes...🐑</p>
    </div>
  );
}
