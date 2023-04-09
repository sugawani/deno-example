import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("ja-JP");

export default function Countdonwn(props: { target: string }) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  if (now > target) {
    return <span>🐮</span>;
  }

  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
