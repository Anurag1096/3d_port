import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { linkedin, twitter, github } from "../assets/icons";
import { saveToEmailjs } from "../saveToEmailjs";
import { offlineSave } from "../offlineScripts/offlineSave";
import { offlineSyncForms } from "../offlineScripts/offlineSyncForms";
const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKkey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    form_name: "",
    reply_to: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // code to handle form data

  const iconList = [
    {
      iconName: "linkedin",
      iconLink: "https://www.linkedin.com/in/anurag-chakravarty-832338a6/",
      iconUrl: linkedin,
    },
    {
      iconName: "twitter",
      iconLink: "https://x.com/anuragonexzero?s=21",
      iconUrl: twitter,
    },
    {
      iconName: "github",
      iconLink: "https://github.com/Anurag1096",
      iconUrl: github,
    },
  ];
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // code to handle form submit

  ///////////////////////////////////////////////////
//neet to rewrite saving sequence
  // useEffect(()=>{
  // const syncOff=()=>{
  //   offlineSyncForms(saveToEmailjs)
  // }
  //   window.addEventListener('online',syncOff)

  //   return()=> window.removeEventListener('online',syncOff)
  // },[])
  ///////////////////////////////////////////////////
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    if (!serviceKey || !templateKey || !publicKkey) {
      console.error("EmailJS environment variables are missing");
      setIsLoading(false);
      return;
    }

    if (navigator.onLine) {
      const success = await saveToEmailjs({
        serviceKey,
        templateKey,
        publicKkey,
        formRef,
      });
      if (success) {
        console.log("Sent");
      }
    } else {
      //it wont take form data but formref dom values
      await offlineSave(form);
    }
    setForm({ form_name: "", reply_to: "", message: "" });
  };
////////////////////////////
  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex  flex-col-reverse max-container-2 md:justify-between md:flex-row"
    >
      {/* Contact section */}
      <div className="flex-1 min-w-[50%] flex flex-col md:max-w-[40%] ">
        <h1 className="head-text">Get in touch</h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14 md:mt-4"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>Name</div>
            <input
              type="text"
              name="form_name"
              className="input"
              placeholder="John"
              required
              value={form.form_name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>Email</div>
            <input
              type="email"
              name="reply_to"
              className="input"
              placeholder="John@abc.com"
              required
              value={form.reply_to}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>Message</div>
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="John"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <div className="flex flex-col-reverse  m-auto md:flex-row  ">
        <div className="bg-black dark:bg-[#FFFAFA] h-px w-inherit my-10 md:hidden "></div>
        <div className="hidden md:inline-block md:bg-black md:dark:bg-[#FFFAFA]  md:h-48 md:w-px md:mx-10 "></div>

        <div className="flex ">
          {iconList.map((item) => (
            <div
              key={item.iconName}
              className="block-container cursor-pointer w-14 h-14 m-4  md:w-32 md:h-32 md:m-8"
            >
              <div className="btn-back rounded-xl " />
              <a
                href={item.iconLink}
                target="blank"
                className="btn-front  rounded-xl flex justify-center ml-5
                item-center
                "
              >
                <img
                  className=" w-1/2 h-1/2 object-contain "
                  src={item.iconUrl}
                  alt={item.iconName}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
