"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero2 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero2.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20 md:px-8">
        {/* Shape 04 */}
        <Image
          width={335}
          height={384}
          src="/images/shape/shape-04.png"
          alt="Shape 04"
          className="absolute top-0 left-0 z-20 lg:left-10"
        />

        {/* Shape 05 */}
        <Image
          width={132}
          height={132}
          src="/images/shape/shape-05.png"
          alt="Shape 05"
          className="absolute bottom-0 right-0 z-20"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12.5 lg:mb-17.5 max-w-3xl"
        >
          <h4 className="mb-4.5 text-lg font-medium">WELCOME</h4>
          <h2 className="mb-4 text-3xl font-bold xl:text-5xl">
            Flogeros Impact
          </h2>
          <p className="mx-auto lg:w-11/12">
            Affordable Nigerian travel agency offering online booking and
            visa services for seamless travel.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-wrap gap-5 mb-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email address"
                className="rounded-full border border-white bg-transparent px-6 py-2.5 text-white placeholder-white focus:border-primary focus:outline-none"
              />
              <button
                aria-label="get started button"
                className="rounded-full bg-white px-7.5 py-2.5 text-black hover:bg-opacity-90 transition duration-300 ease-in-out"
              >
                Get Started
              </button>
            </div>
            <p className="text-white">
              Feel free to reach out.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;