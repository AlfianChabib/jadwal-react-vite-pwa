import { useState } from "react";

export default function Time() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  clearInterval(setInterval(UpdateTime, 1000));

  return <h1>{ctime}</h1>;
}
