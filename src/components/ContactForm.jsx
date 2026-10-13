import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="bg-white p-5 flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-xs font-bold  uppercase mb-1">Name</label>
            <input className="w-full p-2 outline-0 border rounded-none focus:outline " type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold  uppercase mb-1">Email</label>
            <input className="w-full p-2 outline-0 border rounded-none focus:outline " type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold  uppercase mb-1">Topic</label>
            <input className="w-full p-2 outline-0 border rounded-none focus:outline " type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold  uppercase mb-1">Message</label>
            <textarea className="w-full p-2 h-30 outline-0 border rounded-none focus:outline " type="text" >
            </textarea>
          </div>
          <div>
            <button className="w-full p-3 bg-orange-500 text-lg text-white font-bold  uppercase">Send to Lynx</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
