import React from "react";
import SubjectCard from "../components/SubjectCard";
import { ReactLogo } from "../assets/Icons";

const Home = () => {
  return (
    <div className="relative w-full">
      <div className="absolute -top-32 -right-40">
        <ReactLogo />
      </div>
      <div className="w-full flex items-center justify-center py-10 mb-6 flex-col gap-6">
        <h1 className="text-5xl font-bold w-1/2 leading-normal text-center text-indigo-200">
          Dive into the world of <span className="text-blue-500">Computer</span>{" "}
          <span className="text-red-500">Science</span>
        </h1>
      </div>
      <div className="w-[95%] mx-auto flex gap-14 flex-wrap">
        <SubjectCard
          title={"Competitive Coding"}
          image={"/public/images/code.png"}
          width={"10rem"}
          hieght={"8rem"}
        />
        <SubjectCard
          title={"Project Development"}
          image={"/public/images/project.png"}
          width={"10rem"}
          hieght={"10rem"}
        />
        <SubjectCard
          title={"Computer Science Theory"}
          image={"/public/images/theory.png"}
          width={"14rem"}
          hieght={"8rem"}
        />
      </div>
    </div>
  );
};

export default Home;
