import React, { useState } from 'react'
import Overlay from './overlay'
import { OPEN_PANEL_OVERLAY } from '../../utils/constants/cypressClassNames.js'

const OverlayController = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)
    return (
        <>
            <button
                onClick={() => setIsOverlayVisible(true)}
                type="button"
                className={`${OPEN_PANEL_OVERLAY} mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
                Add New Resource
            </button>

            {isOverlayVisible && <Overlay setIsOverlayVisible={setIsOverlayVisible} />}
        </>
    )
}

export default OverlayController
