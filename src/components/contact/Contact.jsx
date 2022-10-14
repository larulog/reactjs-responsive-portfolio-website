import React, { useState, useRef } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_blldyc1",
        "template_5zfwx7s",
        formRef.current,
        "IKXdIU8gDrM57g5oK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's go, we are gonna make project!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +321 43212 342
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              info@larulog.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              32. Street, Taco Bell 4235 New Mexico, United States
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className="c-desc">
            <b>Tell me your story!</b>
          </h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              name="user_name"
              value={name}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
