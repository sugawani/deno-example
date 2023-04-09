import Countdonwn from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 10);
  return (
    <p>
      The big event is happening <Countdonwn target={date.toISOString()} />.
    </p>
  );
}
