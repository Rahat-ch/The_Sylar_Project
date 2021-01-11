import React, { useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import Item from './Item'

const Dropdown = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => setIsVisible(!isVisible)
    const handleOutsideClick = () => setIsVisible(false)
    const dropDownItemRef = React.useRef(null)
    useOnClickOutside(dropDownItemRef, handleOutsideClick)
    return (
        <div className="relative inline-block text-left mt-4">
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

export default Dropdown
