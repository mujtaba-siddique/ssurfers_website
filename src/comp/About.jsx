import React from "react";
import Aboutus from "../assets/about_us.webp";
function About() {
  return (
    <div>
      <h1 className=" text-center mt-20 text-4xl font-bold font-roboto">
        About Us
      </h1>

      <p className="text-wrap sm:mx-72  mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem, corporis laudantium mollitia maxime et unde ipsum rerum
        ut dolorum saepe amet ab quod ratione suscipit quis voluptatibus sed
        recusandae! Maxime dolorum deleniti, sapiente culpa dolorem qui esse,
        vitae, hic officia expedita unde voluptas laboriosam nostrum quo dolore
        voluptatibus veritatis facilis labore harum suscipit optio illo quod
        dolores ducimus! Laboriosam dolorem nisi aspernatur numquam quisquam
        odio alias illum ducimus fugiat facilis molestias natus itaque fuga eum
        perferendis quis veritatis voluptatum adipisci vero, dolore ipsam! Eos,
        cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laboriosam nesciunt quo non hic facere dolores omnis ea, rerum
        architecto nostrum explicabo enim dolore neque fuga modi! Eveniet
        reprehenderit recusandae dolore.
      </p>

      <img src={Aboutus} alt="About us" className="mx-auto mt-10 " />
      <p className="text-wrap sm:mx-72  mt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem, corporis laudantium mollitia maxime et unde ipsum rerum
        ut dolorum saepe amet ab quod ratione suscipit quis voluptatibus sed
        recusandae! Maxime dolorum deleniti, sapiente culpa dolorem qui esse,
        vitae, hic officia expedita unde voluptas laboriosam nostrum quo dolore
        voluptatibus veritatis facilis labore harum suscipit optio illo quod
        dolores ducimus! Laboriosam dolorem nisi aspernatur numquam quisquam
        odio alias illum ducimus fugiat facilis molestias natus itaque fuga eum
        perferendis quis veritatis voluptatum adipisci vero, dolore ipsam! Eos,
        cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laboriosam nesciunt quo non hic facere dolores omnis ea, rerum
        architecto nostrum explicabo enim dolore neque fuga modi! Eveniet
        reprehenderit recusandae dolore.
      </p>
    </div>
  );
}

export default About;
