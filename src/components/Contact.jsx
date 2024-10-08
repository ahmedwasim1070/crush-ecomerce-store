import React from 'react';
import '../index.css';


function Contact() {

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    event.target.reset();
  };

  return (
    <section className='w-full border border-solid shadow-2xl rounded-2xl my-10'>
      <div className='m-10'>
        <h1 className='text-5xl text-center'>Contact Us</h1>
      </div>
      <form name='Contact' method='POST'  onSubmit={handleSubmit} data-netlify-honeypot="bot-field"  className='p-10 my-10 rounded-2xl flex flex-col gap-10 text-black 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-5 esm:px-4'>
        <div className='flex items-center gap-5 flex-wrap mt-5'>
          <label className='font-bold'>Name :</label>
          <input name='name' type='text' required className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[55%] sm:w-full esm:w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450  outline-none' placeholder='Full Name'/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='font-bold'>Email :</label>
          <input name='phone' type='email' required className='2xl:w-[30%] xl:w-[30%]  lg:w-[30%] md:w-[55%] sm:w-full esm:w-full bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-450 outline-none' placeholder='Email '/>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <label className='font-bold'>Messages :</label>
          <textarea    name='address'  required   className='2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[80%] sm:w-full esm:w-full h-40 bg-transparent border border-[rgba(0,0,0,0.6)] rounded-md p-2.5 placeholder:text-gray-500 outline-none resize-none'  placeholder=' Type Here ...  '/>
        </div>
        <div className='w-full 2xl:px-40 xl:px-40 lg:px-24 md:px-22 sm:px-20 esm:px-10 2xl:flex 2xl:justify-end xl:flex xl:justify-end lg:flex lg:justify-end md:flex md:justify-end sm:flex sm:justify-center esm:flex esm:justify-center  items-center gap-4 mt-5 flex-wrap'>
          <a href='https://wa.me/+923206469705' ><button type='button' className='text-center border border-[rgba(0,0,0,0.4)]   rounded-lg font-bold flex gap-2 transition-all duration-300 text-white bg-[#25D366] hover:bg-white hover:text-black text-lg p-4 group'><p className='text-nowrap'>Contact Us</p><svg width="24px" height="24px" className=' transition-all duration-300 fill-white group-hover:fill-black' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"/></svg></button></a>
          <p className='text-lg font-bold 2xl:w-auto xl:w-auto lg:w-auto md:w-auto esm:w-full  sm:w-full sm:text-center esm:text-center'>OR</p>
          <button className='text-center border border-[rgba(0,0,0,0.4)]  p-4 rounded-lg font-bold  flex flex-row gap-2 transition-all duration-300 bg-black text-white  hover:bg-white hover:text-black text-lg text-nowrap  '>Leave a Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact

/* HTML: <div class="loader"></div> */
