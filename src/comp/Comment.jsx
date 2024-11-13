import React from "react";
import Customer1 from "../assets/Customer1.webp";
import Customer2 from "../assets/Customer2.webp";
function Comment() {
  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-roboto">Customer reviews</h1>
        <p className="sm:mx-64 mx-8 mt-5 font-roboto text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
          reiciendis deleniti ut eius corporis modi doloribus quaerat iste?
          Ipsum non quidem asperiores voluptates quam necessitatibus laborum
          eaque unde. Iste, consequuntur.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mx-64 mx-6 mt-4">
          <div className=" p-4 mt-10  hover:border border-black rounded-sm ">
            <img
              src={Customer1}
              alt="image of customer"
              className="rounded-full mx-auto "
            />

            <p className="text-gray-500 font-roboto mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quasi dolor deleniti! Eum, adipisci iusto! Praesentium dolores
              quam quisquam sed sint, a obcaecati reiciendis voluptas earum
              voluptates est perspiciatis quasi.
            </p>
            <h3 className="mt-8 text-center text-xl  hover:border border-black mx-32 rounded-sm">
              @Julio_Diaz
            </h3>
          </div>
          <div className=" p-4 mt-10  hover:border border-black rounded-sm ">
            <img
              src={Customer2}
              alt="image of customer"
              className="rounded-full mx-auto "
            />

            <p className="text-gray-500 font-roboto mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quasi dolor deleniti! Eum, adipisci iusto! Praesentium dolores
              quam quisquam sed sint, a obcaecati reiciendis voluptas earum
              voluptates est perspiciatis quasi.
            </p>
            <h3 className="mt-8 text-center text-xl  hover:border border-black mx-32 rounded-sm ">
              @Lisa_Wright
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
