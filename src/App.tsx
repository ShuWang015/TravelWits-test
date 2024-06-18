import { useState } from "react";
import { data } from "./data";
import Table from "./components/Table";
import InputGroup from "./components/InputGroup";
import Button from "./components/Button";

function App() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ratingFloor, setRatingFloor] = useState("");
  const [ratingCeiling, setRatingCeiling] = useState("");
  const onReset = () => {
    setTitle("");
    setCategory("");
    setRatingFloor("");
    setRatingCeiling("");
  };
  return (
    <div className="App">
      <h1 className="text-center mt-4">Movie List</h1>
      <InputGroup
        inputType="text"
        exampleInput="The Matrix"
        inputName="Search by title"
        input={title}
        setInput={setTitle}
      />
      <InputGroup
        inputType="text"
        exampleInput="Action"
        inputName="Search by category"
        input={category}
        setInput={setCategory}
      />
      <InputGroup
        inputType="number"
        exampleInput="0.0"
        inputName="with rating greater than"
        input={ratingFloor}
        setInput={setRatingFloor}
      />
      <InputGroup
        inputType="number"
        exampleInput="10.0"
        inputName="with rating less than"
        input={ratingCeiling}
        setInput={setRatingCeiling}
      />
      <Button onClick={onReset}>Reset</Button>
      <Table
        entry={data}
        title={title}
        category={category}
        ceiling={ratingCeiling}
        floor={ratingFloor}
      />
    </div>
  );
}

export default App;
