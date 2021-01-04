import React, { useContext } from 'react'
import Proptypes from 'prop-types'
import { DropdownContext } from '../../contexts/DropdownContext'

const Item = ({ isVisible, setIsVisible, itemRef }) => {
    const { setLocation, dropDownData } = useContext(DropdownContext)
    if (!isVisible) return <div />
    const handleClick = (e) => {
        setLocation(e.target.textContent)
        setIsVisible(false)
    }
    return (
        <div
            ref={itemRef}
            className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
            <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                {dropDownData.map((choice) => (
                    <button
                        onClick={(e) => handleClick(e)}
                        key={choice}
                        type="button"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                    >
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    )
}

Item.propTypes = {
    isVisible: Proptypes.bool.isRequired,
    setIsVisible: Proptypes.func.isRequired,
    itemRef: Proptypes.func.isRequired,
}

export default Item
