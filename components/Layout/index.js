import React from 'react'

const Layout = ({ children }) => (
    <div>
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://i.ibb.co/027B51g/icon1.png"
                                alt="Workflow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                    The Sylar Project
                </h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* <!-- Replace with your content --> */}
                <div className="px-4 py-6 sm:px-0">{children}</div>
                {/* <!-- /End replace --> */}
            </div>
        </main>
    </div>
)

export default Layout
