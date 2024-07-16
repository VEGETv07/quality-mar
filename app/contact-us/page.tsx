import Head from 'next/head';
import React from 'react'
import Form from './_components/Form';
import ContactInfo from './_components/ContactInfo';
import Map from './_components/Map';
import { FormPopUp } from './_components/FormPopUp';

function ContactUs() {

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="px-10 lg:px-40 py-20 bg-[#F5F5F5] grid grid-cols-1 gap-8">
      <h1 className="text-4xl font-bold text-center">Contactez-Nous</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <ContactInfo />
        <Form />
        </div>
      </div>
      <Map />
      {/* <FormPopUp /> */}
    </>
  );
}

export default ContactUs;