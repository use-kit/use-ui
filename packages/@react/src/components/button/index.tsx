import React from 'react'

const UButton: React.FC = () => {
  return (
    <>
      <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Button</button>

      <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-xs">Button</button>

      <a href="javascript: void(0)" className="mx-2 my-2 flex items-center bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
        <span className="h-4 w-4 mr-2">
          <svg xmlns="www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x={3} y={5} width={18} height={14} rx={2} />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </span>
        Button
      </a>
    </>
  )
}

export default UButton
