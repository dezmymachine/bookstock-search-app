import React from "react";
import spinner from "../assets/spinner.svg";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <img src={spinner} alt="loading" className="h-96 w-96" />
    </div>
  );
};

export default Loading;
