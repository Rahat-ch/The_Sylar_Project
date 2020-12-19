import React from 'react';

const Dropdown = ({ dropDownData, setLocation }) => {
  return (
    <section className="p-4 mt-0">
      <div className="flex flex-wrap -mx-8">
        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
        </div>
        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
          <div className="relative inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"></path></svg>
            <select onChange={(e) => setLocation(e.target.value)} className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              {dropDownData.map(choice => <option>{choice}</option>)}
            </select>
          </div>
        </div>
        <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
        </div>
      </div>
    </section>
  )
};

export default Dropdown