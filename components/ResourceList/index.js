import React, { useContext } from 'react'
import Dropdown from '../Dropdown'
import ResourceCard from '../ResourceCard'
import { ApiContext } from '../../contexts/ApiContext'
import { DropdownContext } from '../../contexts/DropdownContext'

const ResourceList = () => {
    const { location, setLocation, dropDownData } = useContext(DropdownContext)
    const resourceProps = useContext(ApiContext)
    const resources = resourceProps[location]
    return (
        <>
            <Dropdown setLocation={setLocation} dropDownData={dropDownData} />
            {resources &&
                resources.map((resource) => (
                    <ResourceCard key={resource.name} resource={resource} />
                ))}
        </>
    )
}

export default ResourceList
