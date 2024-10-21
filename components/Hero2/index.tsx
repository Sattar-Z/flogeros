"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import emailjs from '@emailjs/browser';

const Hero2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    departure: "",
    destination: "",
    date: "",
    passengers: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_pa49t6t',
      'template_ag28jao',
      formData,
      'tGM9aCcfck-ZsFTwp'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your flight booking request has been sent!');
        setFormData({
          name: "",
          email: "",
          departure: "",
          destination: "",
          date: "",
          passengers: ""
        });
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send your request. Please try again.');
      });
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Flogeros Impact</h1>
          <p className="text-xl md:text-2xl mb-8">Affordable Nigerian travel agency for seamless journeys</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Book Your Flight
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-30 w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-waterloo mb-4"
                  >
                    Book Your Flight
                  </Dialog.Title>
                  <button
                    onClick={() => setIsModalOpen(false)}
                      type="submit"
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      X
                    </button>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border bg-white dark:bg-black border-gray-300 rounded-full"
                      required
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border border-gray-300 bg-white dark:bg-black rounded-full"
                      required
                    />
                    <input
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      type="text"
                      placeholder="Departure City"
                      className="w-full px-3 py-2 border border-gray-300 bg-white dark:bg-black rounded-full"
                      required
                    />
                    <input
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      type="text"
                      placeholder="Destination City"
                      className="w-full px-3 py-2 border border-gray-300 bg-white dark:bg-black rounded-full"
                      required
                    />
                    <input
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 bg-white dark:bg-black rounded-full"
                      required
                    />
                    <input
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      type="number"
                      placeholder="Number of Passengers"
                      className="w-full px-3 py-2 border bg-white dark:bg-black border-gray-300 rounded-full"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Submit Booking
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Hero2;