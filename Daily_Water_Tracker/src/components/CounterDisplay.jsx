import React from "react";

const CounterDisplay = React.memo(({ count }) => {
  console.log("CounterDisplay Rendered");

  return <h3>Water Count: {count}</h3>;
});

export default CounterDisplay;