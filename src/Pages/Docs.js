import React from "react";
import "../App.css";
import headerImage from "../Images/Header-Docs.avif";
import reference from "../Images/ref-image1.png";

const Docs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mb-20">
      <article className="docs-article w-2/5 text-justify flex flex-col gap-10">
        <section className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-center">DOCS</h1>
          <img
            className="docs-image"
            src={headerImage}
            alt="A header for the docs page with the marvel charachter deadpool and taskmaster in it for comedic effect"
          ></img>
        </section>
        <section className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-center">USECASES</h1>
          <p>
            There's only 2 : <br />
            ⇒ You got asked to make a sheet of the completed tasks for the
            previous month
            <br />⇒ You wanna make a list of all the completed tasks so you can
            QA them because iLumnr is a pain in the ass to work with
          </p>
        </section>
        <section className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-center">HOW TO</h1>
          <p>
            ⇒ Navigate to Project ⇒ Activity ⇒ Filter(complete) <br />⇒ Scroll
            to the bottom and Press "Fetch More" Until you reach the date upto
            which you want data for
            <br />⇒ Select all the text and Paste it into the input field and
            Hit Split
            <br />⇒ Select the tasks and paste them into a column on you
            .gsheets or .csv file and viola you have your task list ready
          </p>
        </section>
        <section className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-center">ISSUES</h1>
          <p>
            ⇒ Once in a Blue Moon you might encounter some errors in output
            because of this pesky little "No Decription" Task <br />⇒ Keep an
            eye out for this and rest will be fine
          </p>
          <img
            className="docs-image"
            src={reference}
            alt="shows an example of the text that might cause malfunction"
          ></img>
        </section>
      </article>
    </div>
  );
};

export default Docs;
