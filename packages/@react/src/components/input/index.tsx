import * as React from 'react'

const UInput: React.FC = () => {
  return (
    <>
     <div className="flex flex-col md:mr-16">
        <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            Email
        </label>
        <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
      </div>

      <div className="flex flex-col md:mr-16 md:py-0 py-4">
        <label htmlFor="last_email" className="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2">
            Email
        </label>
        <input disabled id="last_email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 bg-gray-200 rounded border shadow" placeholder="Placeholder" />
      </div>

      <div className="flex flex-col md:py-0 py-4">
        <label htmlFor="email1" className="md:pt-4 text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2" />
        <input id="email1" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="example@example.com" />
      </div>

      <div className="flex flex-col md:mr-16">
        <label htmlFor="email1" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            Email
        </label>
        <div className="relative">
          <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
          </div>
          <input id="email1" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
        </div>
    </div>

    <div className="flex flex-col md:mr-16 md:py-0 py-4">
        <label htmlFor="email2" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
            Email
        </label>
        <div className="relative">
          <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r dark:border-gray-700 h-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={3} y={5} width={18} height={14} rx={2} />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </div>
          <input id="email2" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
        </div>
    </div>

    <div className="flex flex-col md:py-0 py-4">
      <label htmlFor="email3" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
          Email
      </label>
      <div className="relative">
        <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-indigo-700 dark:bg-indigo-600 rounded-l cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x={3} y={5} width={18} height={14} rx={2} />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </div>
        <input id="email3" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
      </div>
    </div>
    </>
  )
}

export default UInput
