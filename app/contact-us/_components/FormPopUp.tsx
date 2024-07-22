"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function FormPopUp() {
 const [fname, setFname] = useState("");
 const [lname, setLname] = useState("");
 const [phone, setPhone] = useState("");
 const [adress, setAdress] = useState("");
 const [city, setCity] = useState("");
 const [zip, setZip] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");
//  const [status, setStatus] = useState("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   const response = await fetch("/api/MessageAction", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       fname,
       lname,
       phone,
       email,
       city,
       zip,
       adress,
       subject,
       message,
     }),
   });
   console.log(response);
   if (response.ok) {
     toast.success("Message envoyé avec succès!");
   } else {
     const errorData = await response.json();
     console.log("Error response:", errorData);
     toast.error(`Failed to send message: ${errorData.error}`);
   }
   setFname("");
   setLname("");
   setPhone("");
   setAdress("");
   setCity("");
   setZip("");
   setEmail("");
   setSubject("");
   setMessage("");
 };
//  useEffect(() => {
//    if (status) {
//      const timer = setTimeout(() => {
//        setStatus("");
//      }, 5000);
//      return () => clearTimeout(timer);
//    }
//  }, [status]);

  return (
    <div className="flex items-center justify-center">
      <ToastContainer />
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <span className="hidden lg:flex gap-8 items-center text-black/50 text-lg font-medium hover:hover:text-[#00c552] transition-all duration-300">
            CONTACT-NOUS
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              CONTACTEZ-NOUS
            </h4>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Nom"
                  required
                />
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Prenom"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  required
                />
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ville"
                  required
                />
                <input
                  className="py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm block font-light"
                  type="number"
                  name="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Code Postal"
                  required
                />
              </div>
              <div className="w-full ">
                <input
                  className="w-full py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm font-light"
                  type="text"
                  name="adress"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  placeholder="Adress"
                  required
                />
              </div>
              <div className="w-full ">
                <input
                  className="w-full py-2 px-4 rounded-md outline-[#00b254]   border border-black-gray-500 shadow-sm font-light"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="w-full ">
                <textarea
                  rows={5}
                  className="w-full py-2 px-4 rounded-md outline-[#00b254] border border-black-gray-500 shadow-sm font-light"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#52b351] text-sm px-2 py-2 rounded-md border text-white"
              >
                Envoyer
              </button>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
