import React from "react";

const ErrorHandler = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-20">
      <img src="./img/noResult.svg" alt="No result" />
      <div className="flex justify-center align-center bg-gray-200 px-16">
        <p className=" text-xl mt-3 ">
          <span className="text-red">!oops </span>
          We ecountered a problem with the server.
        </p>
      </div>
    </div>
  );
};

export default ErrorHandler;
