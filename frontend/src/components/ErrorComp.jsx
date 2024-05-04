import React from "react";
import cancel from "../assets/cancel.svg";

const ErrorComp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={cancel} alt="error" className="h-96 w-96" />
    </div>
  );
};

export default ErrorComp;
