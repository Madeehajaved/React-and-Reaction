import React from "react";
import Parent from "../Components/Parent";
import ChildOne from "../Components/ChildOne";
import ChildTwo from "../Components/ChildTwo";

export default function ParentPage() {
  return (
    <React.Fragment>
      <div className="text-center my-10">
        <h1>Hey I am Parent Page </h1>
        <div className="">these are my components</div>
        <div className="flex justify-center items-center">
          <Parent noOfChildren={3}>
            <ChildOne />
            <ChildTwo />
            <span>Missing Third Child</span>
          </Parent>
        </div>
      </div>
    </React.Fragment>
  );
}
