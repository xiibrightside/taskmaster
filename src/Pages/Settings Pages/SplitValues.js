import React, { useState, useEffect } from "react";
import "../../App.css";

const SplitValues = () => {
  const [splitAt, setSplitAt] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Fetch values from localStorage on component mount
  useEffect(() => {
    const storedSplitAt = localStorage.getItem("splitAt");
    if (storedSplitAt) {
      setSplitAt(JSON.parse(storedSplitAt));
    }
  }, []);

  // Update localStorage whenever splitAt changes
  useEffect(() => {
    localStorage.setItem("splitAt", JSON.stringify(splitAt));
  }, [splitAt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setSplitAt((prevSplitAt) => [...prevSplitAt, inputValue]);
    }
    setInputValue("");
  };

  const handleRemove = (index) => {
    setSplitAt((prevSplitAt) => {
      const updatedSplitAt = [...prevSplitAt];
      updatedSplitAt.splice(index, 1);
      return updatedSplitAt;
    });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredSplitAt = splitAt.filter(
    (splitValue) => splitValue.trim() !== ""
  ); // Filter empty or whitespace values

  return (
    <div>
      <form
        className="flex flex-row justify-center items-center gap-10"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="SPLIT AT?"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>
        {filteredSplitAt.map((splitValue, index) => (
          <div key={index}>
            <p>{splitValue}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitValues;
