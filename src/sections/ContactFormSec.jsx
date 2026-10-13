import React from "react";
import ContactForm from '../components/ContactForm'
const ContactFormSec = () => {
  return (
    <div className="bg-[#DED4C2]">
      <div className="container m-auto flex py-20 gap-10 ">
        <div className="w-1/2">
          <h2 className="text-orange-500  font-bold uppercase tracking-[5px]">
            CONTACT NORTHSTAR
          </h2>
          <h1 className="text-black text-9xl font-black leading-25 mt-5 uppercase">
            HOW CAN WE HELP?
          </h1>
          <p className="w-3/4">
            Have questions about fit, sizing, styling, or your order? Our team
            is here to provide expert guidance and help you find the right fit.
          </p>
        </div>
        <div className="w-1/2">
        <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSec;
