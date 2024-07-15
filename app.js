const heading = React.createElement("h1",{id: "heading"},"hey this is from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);