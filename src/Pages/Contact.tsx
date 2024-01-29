import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
function Contact() {
  const fromRef=useRef(null);
  const [form ,setForm] = useState({name:"", email:"",message:""})
  const [isLoading,setIsLoading] = useState(false)
  // code to handle form data
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  // code to handle form submit
  const handleSubmit = (e) => {
  e.preventDefault()
  setIsLoading(true)
  // Complete it later.
  };

  const handleFocus=()=>{
    
  }
  const handleBlur=()=>{
  }
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* Contact section */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            <div>
              Name
              </div>
            <input type="text" name="name" className="input" placeholder="John" required value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            <div>Email</div>
            <input type="email" name="email" className="input" placeholder="John@abc.com" required value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
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
    </section>
  );
}

export default Contact;
