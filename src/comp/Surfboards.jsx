import React from "react";
import Products from "./ProductsList";

function Surfboards() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-wrap mt-10">
        <h1 className="text-4xl font-roboto mb-5 underlinemd:text-4xl md:font-bold md:mb-10 text-gray-800 ">
          Surfboards Discription
        </h1>
        <p className="max-w-screen-sm font-roboto text-gray-600 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          voluptatibus, nulla doloribus odit tempore temporibus adipisci. Amet
          praesentium, eum placeat magnam sint ea vitae incidunt? Nobis
          explicabo laudantium ipsa reiciendis! Eum expedita blanditiis, ipsa
          cum dolorem consectetur hic praesentium itaque deleniti, molestias
          dolores! Officia esse expedita beatae explicabo sed corporis officiis
          minima distinctio perspiciatis? Saepe in accusantium distinctio
          officia deserunt. Doloremque error distinctio dolor, alias quas minus
          facere laborum enim ipsa vero aperiam doloribus sunt corrupti natus
          nisi cumque adipisci in. Neque nam modi distinctio quam enim. Dolorem,
          commodi ipsum.
        </p>
      </div>
      <Products />
    </>
  );
}

export default Surfboards;
