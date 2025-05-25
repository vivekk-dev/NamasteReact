const parent = React.createElement("div", { id: "heading1" }, [
  React.createElement("div", { id: "child1" }, "Hello World from React"),
  React.createElement("div", { id: "child2" }, "Hello World from React"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
