'use client';
import emailjs from '@emailjs/browser';
import ShopNow from 'components/ShopNow';
import { useRef, useState } from 'react';

const ContactPage = ({ title }) => {
  const text = 'Say Hello';
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <>
      {/* CONTAINER */}
      <div className="flex h-full flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="flex h-1/4 w-full justify-center lg:h-full lg:w-1/2">
          {text.split('').map((letter, index) => (
            <span className="text-6xl" key={index} aria-label="say hello">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="xl:[40%] xl:right-18 bg- flex h-3/4 flex-col justify-center gap-8 rounded-lg bg-[#fff4f4] px-16 py-16 text-base font-medium text-gray-800 lg:right-12 lg:top-0 lg:h-full lg:w-[45%] lg:px-20 lg:py-28 2xl:right-32 2xl:w-[35%]"
        >
          <h2 className="text-lg">Hi there!</h2>
          <textarea
            name="user_message"
            rows={6}
            className="resize-none border-b-2 border-b-black bg-transparent outline-none"
          />
          <p>My mail address is</p>
          <input
            name="user_email"
            type="text"
            className="border-b-2 border-b-black bg-transparent outline-none"
          />
          <p>Regards</p>
          <ShopNow title="Send" className="w-full bg-myGrey text-bgCola hover:text-tertiary" />
          {success && (
            <span className="text-center font-semibold text-green-500">
              Your message has been sent successfully. 🎊
            </span>
          )}
          {error && (
            <span className="text-center font-semibold text-red-500">Something went wrong</span>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactPage;
