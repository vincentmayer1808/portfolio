"use client"
import React, { useState } from 'react'

export const Contact = () => {
    const initForm = {
        username: "",
        email: "",
        consult: "",
      };
    
      const [formState, setFormState] = useState(initForm);
      const [isLoading, setIsLoading] = useState(false);
      const onChangeForm = ({ target }) => {
        setFormState({
          ...formState,
          [target.name]: target.value,
        });
        console.log(formState);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
             console.log(formState)
        const { username, consult, email } = formState;
        if (username === "" || email === "" || consult === "") {
          window.alert("Debe llenar los campos de nombre, correo y comsulta");
        } else {
          await addToDB(formState);
        }
        setIsLoading(false);
    
      };
      const addToDB = async () => {
        try {
            console.log("sending message")
       
        //   await axios.post(
        //     "URL",
        //     formState,
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     }
        //   );
        //   window.alert("I will respond as soon as I read it, thanks for contacting me!");
        } catch (err) {
          window.alert("An error ocurred and I couldn,t receive your message, please try again!");
        }
      };
    

  return (
   <>
     <div className="bg-sky-950">
        <div className="flex-col item-center justify-center">
          <h2 className='font-semibold text-cyan-300'>Contact Me</h2>
          <p className=' text-cyan-300'>
           Tell me about your project and lets see how I can help you!
          </p>
        </div>
        <div className="flex g-2">
          <form>
            <div className="mb-2">
              <label className="font-medium text-cyan-300 items-center justify-center p-2" htmlFor="username">
                Your Name
              </label>
              <input
                className="bg-sky-950 rounded border-fuchsia-600 p-2"
                name="username"
                type="text"
                placeholder="Your name"
                value={formState.username}
                onChange={onChangeForm}
              />
            </div>
            <div className="mb-2">
              <label className="font-medium text-cyan-300 items-center justify-center p-2" htmlFor="email">
               Your Email
              </label>
              <input
                className="bg-sky-950 rounded border-fuchsia-600 p-2"
                name="email"
                placeholder="Your email"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className="mb-2">
              <label className="font-medium text-cyan-300 items-center justify-center p-2" htmlFor="consult">
                Tell me what you need
              </label>
              <textarea
                name="consult"
                className="bg-sky-950 rounded border-fuchsia-600 p-2"
                rows="4"
                cols="50"
               
                value={formState.consult}
                onChange={onChangeForm}
              />
            </div>
            <button
              className="bg-fuchsia-600 rounded p-2 hover:shadow-fuchsia-600"
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
   </>
  )
}
