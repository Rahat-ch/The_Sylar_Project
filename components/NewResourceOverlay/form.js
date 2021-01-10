/* eslint-disable */
import React, { useReducer, useContext } from 'react'
import formReducer, { initialState } from '../../utils/formReducer'
import submitResource from '../../utils/submitResource'
import { DropdownContext } from '../../contexts/DropdownContext'

import Confirmation from './confirmation'
import {
    NAME,
    LINK,
    STATE_ID,
    IMAGE,
    CLOSE_PANEL_OVERLAY,
} from '../../utils/constants/cypressClassNames.js'

import { ModalContext } from '../../contexts/ModalContext'

const Form = ({ setIsOverlayVisible }) => {
    const { dropDownData, createResourceData } = useContext(DropdownContext)
    const {setIsModalVisible, setResponseMessage} = useContext(ModalContext)
    const startingState = initialState(createResourceData[0])
    const [state, dispatch] = useReducer(formReducer, startingState)
    const handleChange = (name, e) => {
        const { value } = e.target
        dispatch({ type: 'SET_INPUT', name, value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const tableResponse = await submitResource(state)
        if (tableResponse.status === '200'){
        setResponseMessage(tableResponse.msg)
        setIsModalVisible(true)
        setIsOverlayVisible(false)
        }
    }
    const handleRegionChange = (e) => {
        const value = createResourceData.find((region) => region.name === e.target.value).id
        const name = 'stateId'
        dispatch({ type: 'SET_INPUT', name, value })
    }
    return (
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="pt-1 space-y-6 sm:space-y-5">
                        <div>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Please fill out the below information to add a new mental health
                                resource to our database. Your submission will not appear until
                                approved by an administrator.
                            </p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Resource name
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        onChange={(e) => handleChange('name', e)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className={`${NAME} max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md`}
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="stateId"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    State/Region
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <select
                                        onChange={(e) => handleRegionChange(e)}
                                        id="stateId"
                                        name="stateId"
                                        className={`${STATE_ID} max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md`}
                                    >
                                        {dropDownData.map((region) => (
                                            <option key={region}>{region}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="link"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Link to Resource
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        onChange={(e) => handleChange('link', e)}
                                        type="text"
                                        name="link"
                                        id="link"
                                        className={`${LINK} block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md`}
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                    Link to Image for resource
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        onChange={(e) => handleChange('image', e)}
                                        type="text"
                                        name="image"
                                        id="image"
                                        className={`${IMAGE} max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className={`${CLOSE_PANEL_OVERLAY} bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            onClick={() => setIsOverlayVisible(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
    )
}

export default Form
