import axios from "axios";
import React, { useState } from "react";

interface MyComponentProps {
  // Define any props here if needed
}

function MyComponent(props: MyComponentProps) {
  const [name, setName] = useState("");

  const getData = () => {
    axios
      .get("https://catfact.ninja/fact")
      // .get("http://localhost:3000/prediction")
      .then((res) => {
        console.log(res);
        setName(res.data.fact);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>My React Component</h1>
      <button onClick={getData}>Test get data</button>
      <h1>{name}</h1>
    </div>
  );
}

export default MyComponent;
