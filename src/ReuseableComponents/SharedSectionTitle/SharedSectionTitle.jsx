import React from 'react'

const SharedSectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-yellow-500 italic text-sm mb-2">
        ---{subHeading}---
      </p>

      <h2 className="text-3xl font-bold border-y-4 border-gray-200 py-3 uppercase w-max mx-auto px-10">
        {heading}
      </h2>
    </div>
  )
}

export default SharedSectionTitle