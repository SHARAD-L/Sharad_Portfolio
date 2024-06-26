import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../style";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "",
          from_email: form.email,
          to_email: "",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "Sharad Lakshmanan ",
            email: "sharadlakshmanan19@gmail.com",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={` w-full justify-center xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col justify-center gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='flex justify-start mb-4 text-white font-bold text-[20px]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="name"
              className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='flex justify-start mb-4 text-white font-bold text-[20px]'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='flex justify-start px-3 mb-4 text-white font-bold text-[20px]'>Your Message</span>
            <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
            />
          </label>

          <button
            type='submit'
            className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary send-btn'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;