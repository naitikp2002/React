import React from "react";
import ReactDOM from "react-dom";

const Parent = () => {
  return <h1>Hello Welcome To React App</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <div>
        <Parent />
        <h1>This is Heading </h1>
      </div>
    </>
  );
};
// const heading = React.createElement("h1", {}, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
