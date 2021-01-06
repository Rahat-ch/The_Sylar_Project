import React, { useContext } from 'react'
import Dropdown from '../Dropdown'
import Alert from '../Alert'
import { DropdownContext } from '../../contexts/DropdownContext'
import NewResourceOverlay from '../NewResourceOverlay'

const Header = () => {
    const { location } = useContext(DropdownContext)
    return (
        <>
            <section className="py-12 px-4 pb-0 pt-0">
                <div>
                    <div>
                        <img
                            className="h-32 w-full object-cover lg:h-48"
                            src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2279&q=80"
                            alt="The Sylar Project Banner - sun shining from behind clouds"
                        />
                    </div>

                    <div className="sm:flex">
                        <div>
                            <p className="mt-2 mb-2 text-xl text-gray-900 dark:text-gray-100">
                                The Sylar Project is a curated list of mental health resources
                                organized by location. Our mission is to make it was easy as
                                possible for you to find your local mental health resources so you
                                can focus on what is actually important, you.
                            </p>
                        </div>
                    </div>
                    <Alert />
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate pt-10">
                                {location}
                            </h2>
                        </div>
                        <aside className="flex flex-col">
                            <Dropdown />
                            <NewResourceOverlay />
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
