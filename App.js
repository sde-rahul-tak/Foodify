import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// react Element

const age = <span>25</span>;

// react component
const Heading = () => {
  return <h1>Hello, Rahul Tak !</h1>;
};

const Content = () => (
  <div>
    {/*its called component composition */}
    <Heading />
    <h1>Your age = {age}</h1>
    <p>This is a functional component</p>
  </div>
);

root.render(<Content/>);
