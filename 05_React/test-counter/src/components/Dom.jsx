import React, { useState } from "react";

const Dom = () => {
  let [btnText, setBtnText] = useState("Submmit");
  let [eligible, setEligible] = useState("Not eligible");

    const textChange = () => {
        setBtnText("Clicked");
        setEligible("Eligible");
    };
//   function textChange () {
//     setBtnText("Clicked");
//     setEligible("Eligible");
//   };


  return (
    <>
      <button onClick={textChange}>{btnText}</button>

      <h1>{eligible}</h1>
      <h2>{btnText}</h2>
      <h3>{eligible}</h3>
    </>
  );
};

export default Dom;
