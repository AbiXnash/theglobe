/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import { Fade } from "react-awesome-reveal";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from "@emailjs/browser";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "abixnash@gmail.com",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_b7qmacv",
          "template_nczo9ru",
          templateParams,
          "A0iOpeEgxHg-8XV3d",
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error);
          },
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Let&apos;s Discuss
        </h1>
      </Fade>

      {/* Additional Contact Information */}

      <Fade direction="up" triggerOnce>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-xl font-semibold text-theme-blue mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/+918667608025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-50 border border-green-300 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span className="text-gray-700 font-medium">+91 86676 08025</span>
            </a>

            {/* Email */}
            <a
              href="mailto:thenmozhi05082003@gmail.com"
              className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-300 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">
                thenmozhi05082003@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/thenmozhi-t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-300 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <FaLinkedin className="text-blue-700 text-2xl" />
              <span className="text-gray-700 font-medium">thenmozhi-t</span>
            </a>
          </div>
        </div>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12 mt-10">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project and we'll get
          back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};
