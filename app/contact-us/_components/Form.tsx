"use client";

import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

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
      setStatus("Message envoyé avec succès!");
    } else {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      setStatus(`Failed to send message: ${errorData.error}`);
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
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <div className="w-full lg:w-4/5 bg-white p-10 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Nom"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Prenom"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ville"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm block"
              type="number"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Code Postal"
              required
            />
          </div>
          <div className="w-full ">
            <input
              className="w-full py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm "
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Adress"
              required
            />
          </div>
          <div className="w-full ">
            <input
              className="w-full py-2 px-4 rounded-md outline-[#299dda]   border border-black-gray-500 shadow-sm "
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Sujet"
              required
            />
          </div>
          <div className="w-full ">
            <textarea
              rows={5}
              className="w-full py-2 px-4 rounded-md outline-[#299dda] border border-black-gray-500 shadow-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            ></textarea>
          </div>
          <button
            className="md:w-1/6 bg-[#2086bc] text-white px-4 py-2 rounded-full hover:bg-[#2085bcec] transition-all duration-300"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      {status && (
        <p
          className={`text-center  font-bold ${
            status.includes("succès") ? "text-[#41c13f]" : "text-[#f33a3a]"
          }`}
        >
          {status}
        </p>
      )}
      </div>

    </>
  );
}
