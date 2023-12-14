import React from "react";

function SubjectCard({ title, image, width, hieght }) {
  return (
    <>
      <div className="relative flex-1 h-[18rem] group flex duration-300 hover:scale-110 cursor-pointer">
        <div className="relative w-full h-full rounded-3xl bg-indigo-700">
          <div className="text-3xl h-full font-bold  px-5 py-10 z-10">
            <div className="w-1/2">{title}</div>
          </div>
          <div
            className="absolute bottom-6 right-6"
            style={{ width: width, height: hieght }}
          >
            <img src={image} className="w-full h-full" alt="not-found.png" />
          </div>
        </div>
        <div className="absolute w-full h-full rounded-3xl -z-10 top-0 left-0 group-hover:translate-x-6 group-hover:translate-y-6  bg-red-500 duration-300"></div>
      </div>
    </>
  );
}

export default SubjectCard;
