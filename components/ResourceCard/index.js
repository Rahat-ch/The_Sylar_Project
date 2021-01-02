import React from 'react'
import Proptypes from 'prop-types'

const ResourceCard = ({ resource }) => {
    if (!resource) return null
    const { description, image, link, name, posted } = resource
    return (
        <a href={link}>
            <div className="h-56 relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                    <img className="h-8 w-8" src={image} alt={`${name} banner`} />
                </div>
                <div className="flex-1 min-w-0">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{description}</p>
                    <p className="text-sm text-gray-500">Posted: {posted}</p>
                </div>
            </div>
        </a>
    )
}

ResourceCard.propTypes = {
    resource: Proptypes.shape({
        description: Proptypes.string,
        image: Proptypes.string,
        link: Proptypes.string,
        name: Proptypes.string,
        posted: Proptypes.string,
    }).isRequired,
}

export default ResourceCard
