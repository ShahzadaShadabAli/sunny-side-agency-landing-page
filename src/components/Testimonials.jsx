import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="py-44 bg-[#fffbf8] max-md:py-20">
      <h1 className="text-center tracking-[0.2em] text-gray-400 fraunces-bold text-2xl mb-20 max-md:mb-5">
        CLIENT TESTIMONIALS
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 w-[80%] ml-[10%]">
        <Card name={"Emily R."} occupation={"Marketing Director"} comment={`We put out trust in Sunnyside and they delivered, making sure our needs where met and deadlines were always hit.`} img={"/images/image-emily.jpg"} />
        <Card name={"Thomas S."} occupation={"Chief Operating Officer"} comment={`Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.`} img={"/images/image-thomas.jpg"} />
        <Card name={"Jennie F."} occupation={"Business Owner"} comment={`Incredible end result! Our sales increased over 400% when we worked with Sunnyside Highly recommended!`} img={"/images/image-jennie.jpg"} />
      </div>
    </div>
  );
};

export default Testimonials;
