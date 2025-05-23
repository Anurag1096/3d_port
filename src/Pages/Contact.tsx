import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



function Contact() {
  const formRef=useRef();
  const [form ,setForm] = useState({name:"", email:"",message:""})
  const [isLoading,setIsLoading] = useState(false)
  // code to handle form data
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  // code to handle form submit
  const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
  setIsLoading(true)
   
  emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsLoading(false)

        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        },
      );
  };

  const handleFocus=()=>{
    
  }
  const handleBlur=()=>{
  }
  return (
    <section className="relative flex  flex-col-reverse max-container md:justify-between md:flex-row">
      {/* Contact section */}
      <div className="flex-1 min-w-[50%] flex flex-col md:max-w-[40%] ">
        <h1 className="head-text">Get in touch</h1>

        <form ref={formRef} className="w-full flex flex-col gap-7 mt-14 md:mt-4" onSubmit={handleSubmit}>
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>
              Name
              </div>
            <input type="text" name="name" className="input" placeholder="John" required value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>Email</div>
            <input type="email" name="email" className="input" placeholder="John@abc.com" required value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 dark:text-[#FFFAFA] font-semibold">
            <div>Message</div>
            <textarea name="message" rows={4} className="textarea" placeholder="John" required value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur} >
            {isLoading?"Sending...":"Send message"}
          </button>
        </form>
      </div>
      <div className="flex flex-col-reverse  m-auto md:flex-row  ">
        <div className="text-balack dark:text-[#FFFAFA]">OR</div>
        <div className="">
        <span className="p-4" >icon</span>
        <span className="p-4" >icon</span>
        <span className="p-4">icon</span>   
        </div>
      </div>
    </section>
  );
}

export default Contact;
