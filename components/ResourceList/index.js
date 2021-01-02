import React, { useContext } from 'react'
import ResourceCard from '../ResourceCard'
import { ApiContext } from '../../contexts/ApiContext'
import { DropdownContext } from '../../contexts/DropdownContext'

const ResourceList = () => {
    const { location } = useContext(DropdownContext)
    const resourceProps = useContext(ApiContext)
    const resources = resourceProps[location]
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resources &&
                resources.map((resource) => (
                    <ResourceCard key={resource.name} resource={resource} />
                ))}
        </div>
    )
}

export default ResourceList
