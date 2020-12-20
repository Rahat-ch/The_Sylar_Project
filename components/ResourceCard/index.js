import React, { useContext } from 'react';

const ResourceCard = ({ resource }) => {
  if (!resource) return null
  const { description, image, link, name, posted } = resource
  return (
    <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-min mt-4">
      <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={image} alt="bag" />
      <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div className="flex items-center">
          <h2 className="text-xl text-gray-800 font-medium mr-auto">{name}</h2>
        </div>
        <p className="text-sm text-gray-700 mt-4">
          {description}
        </p>
        <div className="flex items-center justify-between mt-7 top-auto">
          <date>Posted: {posted}</date>
          <a href={link} className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Go to this Resource</a>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard