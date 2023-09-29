"use client";
import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { Button, Modal } from "flowbite-react";

export const Contact = () => {
  const initForm = {
    username: "",
    email: "",
    consult: "",
  };
  const [openModal, setOpenModal] = useState("");

  const props = { openModal, setOpenModal };
  const [formState, setFormState] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { username, consult, email } = formState;
    if (username === "" || email === "" || consult === "") {
      window.alert("Debe llenar los campos de nombre, correo y comsulta");
    } else {
      await addToDB(formState);
    }
    setIsLoading(false);
  };
  const addToDB = async (info) => {
    try {
      await db.collection("contact").add(info);
      console.log("message sent");
      setFormState(initForm);
      //   await axios.post(
      //     "URL",
      //     formState,
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      // window.alert("I will respond as soon as posible, thanks for contacting me!");
    } catch (err) {
      console.log(err);
      // window.alert(
      //   "An error ocurred and I couldn,t receive your message, please try again!"
      // );
    }
  };

  return (
    <div className="flex justify-center p-2">
        <p className="text-cyan-300 font-bold text-md ">
          You want to schedule a meeting, gotta doubt or simply want to
          saludate?
        </p>
      <button className="flex items-center p-2 mb-2 w-40 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300" onClick={() => props.setOpenModal("form-elements")}>
        Contact me
      </button>
      <Modal
        show={props.openModal === "form-elements"}
        size="lg"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="bg-sky-950 rounded-lg border-4 border-amber-300 shadow-2xl shadow-amber-300"
      >
        <Modal.Header/>
        <Modal.Body >
          <div className="bg-sky-950 p-2">
            <div className="flex-col item-center justify-center">
              <h2 className="font-semibold text-xl text-amber-300">
                Contact Me
              </h2>
              <p className=" text-cyan-300">
                Tell me about your project and lets see how I can help you!
              </p>
            </div>
            <div className="flex g-2">
              <form>
                <div className="mb-2">
                  <label
                    className="font-medium text-cyan-300 items-center justify-center p-2"
                    htmlFor="username"
                  >
                    Your Name
                  </label>
                  <input
                    className="bg-sky-950 text-white rounded border-amber-300 p-2 focus:border-2 focus:border-amber-300 focus:shadow-xl focus:shadow-amber-300"
                    name="username"
                    type="text"
                    placeholder="Your name"
                    value={formState.username}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="font-medium text-cyan-300 items-center justify-center p-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="bg-sky-950 text-white rounded border-amber-300 p-2 focus:shadow-xl focus:shadow-amber-300"
                    name="email"
                    placeholder="Your email"
                    type="email"
                    value={formState.email}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="font-medium text-cyan-300 items-center justify-center p-2"
                    htmlFor="consult"
                  >
                    Tell me what you need
                  </label>
                  <textarea
                    name="consult"
                    className="bg-sky-950 text-white rounded border-amber-300 p-2 focus:shadow-xl focus:shadow-amber-300"
                    rows="4"
                    cols="50"
                    value={formState.consult}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  className="flex items-center px-3 py-2 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300"
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
      </Modal>
    </div>
  );
};
