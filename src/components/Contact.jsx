"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import "animate.css"

import addToDB from "../helpers/addToDB";
import axios from "axios";


export const Contact = () => {
  const initForm = {
    username: "",
    email: "",
    message: "",
  }

  const [values, setValues] = useState(initForm)

  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  const [isLoading, setIsLoading] = useState(false);

  const onChangeForm = ({ target }) => {
    setValues({
      ...values,
      [target.id]: target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { username, email, message } = values;
    if (username === "" || email === "" || message === "") {
      window.alert("Please, fill all fields!");
    } else {
      try {
        await addToDB(values);
        await axios.post(`https://vincentmayer-portfolio.vercel.app/api/api`, {
          email,
          username,
          message
        })
        window.alert("I will respond as soon as posible, thanks for contacting me!");
      } catch (err) {
        // console.log(err)
        window.alert("There has been an error, please try again soon!");
      }
    }
    setValues(initForm)
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col flex-wrap items-center justify-center p-5 bg-black">
      <p className="text-amber-300 text-center font-bold">
        You want to schedule a meeting, gotta doubt or simply want to
        saludate?
      </p>
      <button className="flex items-center justify-center p-2 my-2 w-40 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105" onClick={() => props.setOpenModal("form-elements")}>
        Contact me!
      </button>
      <Modal
        show={props.openModal === "form-elements"}
        size="lg"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="animate__animated animate__bounceIn"
      >
        <div className="bg-sky-950 rounded-lg border-4 border-amber-300 shadow-2xl shadow-amber-300">
          <Modal.Header />
          <Modal.Body >
            <div className="bg-sky-950 p-2">

              <p className="text-center font-bold text-lg text-amber-300 mb-2">
                Tell me about your project and let&#8217;s see how I can help you!
              </p>
              <div >
                <form className="flex-col flex items-center justify-center gap-2">
                  <div className="mb-2">
                    <label
                      className="font-medium text-cyan-300 p-2"
                      htmlFor="username"
                    >
                      Your Name
                    </label>
                    <input
                      className="bg-sky-950 text-white rounded border-amber-300 p-2 hover:ring-2 hover:ring-amber-300 hover:shadow-xl hover:shadow-amber-300"
                      id="username"
                      name="username"
                      type="text"
                      value={values.username}
                      onChange={onChangeForm}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="font-medium text-cyan-300 p-2"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      className="bg-sky-950 text-white rounded border-amber-300 p-2 hover:ring-2 hover:ring-amber-300 hover:shadow-xl hover:shadow-amber-300"
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChangeForm}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="font-medium mb-2 text-cyan-300 flex items-center justify-center p-2"
                      htmlFor="message"
                    >
                      Tell me what you need
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="bg-sky-950 text-white rounded border-amber-300 p-2 hover:ring-2 hover:ring-amber-300 hover:shadow-xl hover:shadow-amber-300"
                      rows="4"
                      cols="40"
                      value={values.message}
                      onChange={onChangeForm}
                    />
                  </div>
                  <button
                    className="flex items-center px-3 py-2 font-medium text-center text-white bg-fuchsia-600 disabled:bg-fuchsia-800 disabled:ring-none rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105"
                    id="contactButton"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    Contact Me
                  </button>
                </form>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};
