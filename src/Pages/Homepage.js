/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faArrowsSplitUpAndLeft,
} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [placeholderActive, setPlaceholderActive] = useState(true);
  const [inputString, setInputString] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  useEffect(() => {
    const storedList1 = localStorage.getItem("list1");
    if (storedList1) {
      setList1(JSON.parse(storedList1));
    }
  }, []);

  useEffect(() => {
    const storedList2 = localStorage.getItem("list2");
    if (storedList2) {
      setList2(JSON.parse(storedList2));
    }
  }, []);

  useEffect(() => {
    const storedList3 = localStorage.getItem("list3");
    if (storedList3) {
      setList3(JSON.parse(storedList3));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list1", JSON.stringify(list1));
  }, [list1]);

  useEffect(() => {
    localStorage.setItem("list2", JSON.stringify(list2));
  }, [list2]);

  useEffect(() => {
    localStorage.setItem("list3", JSON.stringify(list3));
  }, [list3]);
  const handleInputClick = () => {
    setPlaceholderActive(false);
  };
  const handleInputBlur = () => {
    if (inputString === "") {
      setPlaceholderActive(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    setInputString(inputValue);
    handleSplit();
  };

  const resetList = () => {
    setInputString("");
  };

  const handleSplit = () => {
    const processedString = inputString
      .split(" pm")
      .join("\\n")
      .split(" am")
      .join("\\n")
      .split(" marks")
      .join("\\n")
      .split("as complete")
      .join("\\n");

    setInputString(processedString);

    const lines = processedString.split("\\n");
    setList1([]);
    setList2([]);
    setList3([]);

    lines.forEach((line, index) => {
      if (line.trim() !== "") {
        if (index % 3 === 0) {
          setList1((prevList) => [...prevList, line]);
        } else if (index % 3 === 1) {
          setList2((prevList) => [...prevList, line]);
        } else {
          setList3((prevList) => [...prevList, line]);
        }
      }
    });

    setList1((prevList) => prevList.reverse());
    setList2((prevList) => prevList.reverse());
    setList3((prevList) => prevList.reverse());
  };

  const formattedDates = list1.map((date) => {
    const dates = date.split(",");
    const formattedDate = dates[0].trim();
    return formattedDate;
  });

  return (
    <React.Fragment>
      <div className="form-container w-1/2 px-10 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="string-form w-full flex flex-col justify-center items-center gap-10"
        >
          <input
            placeholder={placeholderActive ? "Input The Copied Text" : ""}
            value={inputString}
            onChange={(event) => setInputString(event.target.value)}
            className="w-full flex justify-center items-center"
            onClick={handleInputClick}
            onBlur={handleInputBlur}
          />
          <div className="flex flex-row gap-20">
            <button
              className="flex flex-row gap-5 justify-center items-center"
              type="submit"
            >
              <FontAwesomeIcon
                className="icons"
                icon={faArrowsSplitUpAndLeft}
              />
              <p>split</p>
            </button>
            <button
              className="flex flex-row gap-5 justify-center items-center"
              onClick={resetList}
            >
              <FontAwesomeIcon className="icons" icon={faArrowRotateLeft} />
              <p>reset</p>
            </button>
          </div>
        </form>
      </div>
      <div className="list-container flex flex-col justify-center items-center w-1/2 px-10 gap-10">
        <div className="list-section w-full flex flex-col justify-center text-left">
          <h2>1. Tasks</h2>
          {list3.map((item, index) => (
            <p key={`list3-${index}`}>{item}</p>
          ))}
        </div>
        <div className="list-section w-full flex flex-col justify-center text-left">
          <h2>2. Dates</h2>
          {formattedDates.map((item, index) => (
            <p key={`list1-${index}`}>{item}</p>
          ))}
        </div>
        <div className="list-section w-full flex flex-col justify-center text-left">
          <h2>3. Names</h2>
          {list2.map((item, index) => (
            <p key={`list2-${index}`}>{item}</p>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
