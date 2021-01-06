import React from 'react'
import { ThemeProvider } from '../../contexts/ThemeContext'
import Toggle from '../ThemeToggle'

const Layout = ({ children }) => (
    <ThemeProvider>
        <div id="layoutRoot" className="">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-start">
                                <img
                                    className="h-8 w-8"
                                    src="https://i.ibb.co/027B51g/icon1.png"
                                    alt="Workflow"
                                />
                                <h1 className="text-2xl font-bold leading-tight text-white pl-3 ">
                                    The Sylar Project
                                </h1>
                            </div>
                        </div>
                        <Toggle></Toggle>
                    </div>
                </div>
            </nav>

            <main className="bg-white dark:bg-gray-700">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">{children}</div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>
    </ThemeProvider>
)

export default Layout
