import React from 'react'
import Form from './form'
import { OVERLAY } from '../../utils/constants/cypressClassNames.js'

const Overlay = ({ setIsOverlayVisible }) => {
    return (
        <div className={`${OVERLAY} z-50 fixed inset-0 overflow-hidden`}>
            <div className="absolute inset-0 overflow-hidden">
                <section
                    className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
                    aria-labelledby="slide-over-heading"
                >
                    {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2
                                        id="slide-over-heading"
                                        className="heading text-lg font-medium text-gray-900"
                                    >
                                        Add a new resource
                                    </h2>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button
                                            onClick={() => setIsOverlayVisible(false)}
                                            type="button"
                                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">Close panel</span>
                                            {/* <!-- Heroicon name: x --> */}
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                <div className="absolute inset-0 px-4 sm:px-6">
                                    <div aria-hidden="true">
                                        <Form setIsOverlayVisible={setIsOverlayVisible} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Overlay
