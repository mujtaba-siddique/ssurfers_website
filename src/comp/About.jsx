import React from "react";
import Aboutus from "../assets/about_us.webp";

function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src={Aboutus} 
              alt="About us" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, corporis laudantium mollitia maxime et unde ipsum rerum
              ut dolorum saepe amet ab quod ratione suscipit quis voluptatibus sed
              recusandae! Maxime dolorum deleniti, sapiente culpa dolorem qui esse,
              vitae, hic officia expedita unde voluptas laboriosam nostrum quo dolore
              voluptatibus veritatis facilis labore harum suscipit optio illo quod
              dolores ducimus!
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Laboriosam dolorem nisi aspernatur numquam quisquam
              odio alias illum ducimus fugiat facilis molestias natus itaque fuga eum
              perferendis quis veritatis voluptatum adipisci vero, dolore ipsam! Eos,
              cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nesciunt quo non hic facere dolores omnis ea, rerum
              architecto nostrum explicabo enim dolore neque fuga modi!
            </p>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, corporis laudantium mollitia maxime et unde ipsum rerum
                ut dolorum saepe amet ab quod ratione suscipit quis voluptatibus sed
                recusandae! Maxime dolorum deleniti, sapiente culpa dolorem qui esse,
                vitae, hic officia expedita unde voluptas laboriosam nostrum quo dolore
                voluptatibus veritatis facilis labore harum suscipit optio illo quod
                dolores ducimus!
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Laboriosam dolorem nisi aspernatur numquam quisquam
                odio alias illum ducimus fugiat facilis molestias natus itaque fuga eum
                perferendis quis veritatis voluptatum adipisci vero, dolore ipsam! Eos,
                cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam nesciunt quo non hic facere dolores omnis ea, rerum
                architecto nostrum explicabo enim dolore neque fuga modi! Eveniet
                reprehenderit recusandae dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;