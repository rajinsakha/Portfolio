import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import "../../containers/Contact/Contact.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbldyjlp");
  if (state.succeeded) {
    return (
      <motion.div
        className="text-center text-[#ff004f] mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl font-semibold">Thanks for Contacting me!</p>
      </motion.div>
    );
  }
  return (
    <form id="app__contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="10"
        placeholder="Your Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="contact-btn !h-11"
        style={{ marginTop: "0.7rem" }}
      >
        {state.submitting ? (
          <AiOutlineLoading3Quarters className="animate-spin mr-2" />
        ) : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
