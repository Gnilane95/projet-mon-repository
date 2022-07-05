import React from 'react'

export default function CardContact() {
  return (
    <div className="px-24 py-20">
      <h1 className="text-xxl text-primary-dark font-black">Contactez moi</h1>
      <p className="w-96 pt-14 text-accent-dark">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        dignissimos maxime cumque ut commodi labore esse nam quaerat quis.
      </p>
      <div>
        <div>
          <form>
            <div className="mb-6 flex mt-20 ">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-primary-dark text-gray-900 text-sm rounded-lg  w-full p-2.5 mr-5"
                placeholder="Name"
                required=""
              />
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-primary-dark text-gray-900 text-sm rounded-lg  w-full p-2.5"
                placeholder="E-mail"
                required=""
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-t-2 border-l-2 border-primary-dark italic text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-primary-dark  text-gray-900 text-sm rounded-lg block w-full pb-24 "
                placeholder="Message"
                required=""
              />
            </div>
          </form>
        </div>
        <button
          type="button"
          className="text-white bg-primary-light hover:bg-primary-dark text-sm px-10 mt-20 py-2.5 mr-2 mb-2 "
        >
          Send message
        </button>
      </div>
    </div>
  );
}
