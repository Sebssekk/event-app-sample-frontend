import React, { useEffect, useState } from "react";

const Delay = ({ delay, children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    console.log(delay);
    const wait = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => clearTimeout(wait);
  }, []);
  return ready ? children : null;
};

export default Delay;
