import React from 'react'

const UBadge: React.FC = () => {
  return (
    <>
      <div className="border border-gray-300 dark:border-gray-700 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
          <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-gray-800 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-gray-600 dark:bg-gray-400  mr-1" />
          <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
          <span className="text-xs text-indigo-700 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-yellow-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-yellow-500 mr-1" />
          <span className="text-xs text-yellow-500 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-red-500 mr-1" />
          <span className="text-xs text-red-500 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-green-500 mr-1" />
          <span className="text-xs text-green-500 font-normal">Badge</span>
        </div>
      </div>

      <div className="bg-blue-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-blue-500 mr-1" />
          <span className="text-xs text-blue-500 font-normal">Badge</span>
        </div>
      </div>

      <div className="border border-gray-300 dark:border-gray-700 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">Badge</span>
      </div>

      <div className="bg-gray-500 dark:bg-gray-800 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-indigo-700 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-yellow-300 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-red-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-green-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-blue-400 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
        <span className="text-xs text-white font-normal">Badge</span>
      </div>

      <div className="bg-indigo-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center mr-8">
        <div className="flex items-center justify-around h-full w-full">
          <span className="text-xs text-indigo-700 font-normal">Badge</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth={2} stroke="#667EEA" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
    </div>

    <div className="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
      <div className="flex items-center justify-around h-full w-full">
        <span className="text-xs text-indigo-700 font-normal">Badge</span>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={12} height={12} viewBox="0 0 24 24" strokeWidth={2} stroke="#667EEA" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default UBadge
