import { useState } from "preact/hooks";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  sleep().then(() => setLoading(false));

  if (loading) return <p>🐢Loading...🐢</p>;
  return <p>🐮Complete!🐮</p>;
}

const sleep = () => new Promise((resolve) => setTimeout(resolve, 3000));
