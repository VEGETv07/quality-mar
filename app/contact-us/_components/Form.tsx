"use client";

import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
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
        name,
        email,
        subject,
        message,
      }),
    });
    console.log(response)
    if (response.ok) {
      setStatus("Message envoyé avec succès!");
    } else {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      setStatus(`Failed to send message: ${errorData.error}`);
    }
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="px-10 lg:px-40 py-20 bg-[#F5F5F5] grid grid-cols-1 gap-8">
      <div>
        <h1 className="text-4xl font-bold text-center">Contactez-Nous</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            className="py-4 px-6 rounded-md outline-none shadow-sm block"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            required
          />
          <input
            className="py-4 px-6 rounded-md outline-none shadow-sm block"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full ">
          <input
            className="w-full py-4 px-6 rounded-md outline-none shadow-sm "
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
            className="w-full py-4 px-6 rounded-md outline-none shadow-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          className="md:w-1/6 bg-[#41c13f] text-white px-4 py-2 rounded-md hover:bg-[#319433] transition-all duration-300"
          type="submit"
        >
          Envoyer
        </button>
      </form>
      {status && <p className="text-center text-[#41c13f] font-bold">{status}</p>}
    </div>
  );
}
