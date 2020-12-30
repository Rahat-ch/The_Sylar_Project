import React, { useState, useRef } from 'react'
import Proptypes from 'prop-types'
import useOnClickOutside from 'use-onclickoutside'
import Item from './Item'

const Dropdown = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => setIsVisible(!isVisible)
    const handleOutsideClick = () => setIsVisible(false)
    const dropDownItemRef = React.useRef(null)
    useOnClickOutside(dropDownItemRef, handleOutsideClick)
    return (
        // <section className="p-4 mt-0">
        //     <div className="flex flex-wrap -mx-8">
        //         <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0" />
        //         <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
        //             <div className="relative inline-flex">
        //                 <svg
        //                     className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 412 232"
        //                 >
        //                     <path
        //                         d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        //                         fill="#648299"
        //                         fillRule="nonzero"
        //                     />
        //                 </svg>
        //                 <select
        //                     onChange={(e) => setLocation(e.target.value)}
        //                     className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        //                 >
        //                     {dropDownData.map((choice) => (
        //                         <option key={choice}>{choice}</option>
        //                     ))}
        //                 </select>
        //             </div>
        //         </div>
        //         <div className="md:w-1/3 py-4 px-8 mb-4 md:mb-0" />
        //     </div>
        // </section>
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => handleClick()}
                >
                    Choose a Location
                    {/* <!-- Heroicon name: chevron-down --> */}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            oncl
                        />
                    </svg>
                </button>
            </div>

            {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            <Item itemRef={dropDownItemRef} isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    )
}

Dropdown.propTypes = {
    dropDownData: Proptypes.arrayOf(Proptypes.string).isRequired,
    setLocation: Proptypes.func.isRequired,
}

export default Dropdown
