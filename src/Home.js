import { useState } from "react";

const Home = () => {
  // let name = "Stian";
  const [name, setName] = useState("Stian");
  const [age, setAge] = useState(35)

  const handleClick = () => {
    setName("Thomas")
    setAge("34")

  };


  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
