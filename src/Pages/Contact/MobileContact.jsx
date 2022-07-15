import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailMessage from "../../components/other/EmailMessage";

const MobileContact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h4dey33",
        "template_t19eoy8",
        form.current,
        "5Zt16kyRZxZpPmFJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      {result ? (
        <EmailMessage />
      ) : (
        <div className="container mt-32 md:hidden p-5">
          <div className="form-title-contact-us">
            <h2 className="text-xl font-bold">
              SEND US <span className="text-secondary font-bold">Message</span>
            </h2>
          </div>
          {/* form start */}
          <div className="mobile-form-contact-us shadow-lg flex items-center mb-8">
            <form
              onSubmit={onSubmit}
              className="mobile-contactUsForm  mt-10 p-1 mx-auto"
              ref={form}
            >
              <div className="input-field-text flex flex-col">
                {/* name */}
                <label htmlFor="Name" className="mb-2 font-light">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="text-input p-1 border"
                  required
                />
              </div>
              {/* email */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Email" className="mb-2 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="text-input p-1 border"
                  required
                />
              </div>
              {/* number */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="number" className="mb-2 font-light">
                  Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="user_phone"
                  className="text-input p-1 border"
                />
              </div>
              {/* message */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="number" className="mb-2 font-light">
                  Message
                </label>
                <textarea
                  name="user_message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="bg-white border border-gray-200 h-40"
                ></textarea>
              </div>
              {/* submit */}
              <div className="formButton mt-8 ml-20">
                <button
                  type="submit"
                  className="p-3 bg-bg-primary cursor-default text-white font-light"
                  value="send"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>  
        </div>
      )}
    </>
  );
};

export default MobileContact;
