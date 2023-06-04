import React, { useState } from 'react'

const UTooltip: React.FC = () => {
  const [tooltipStatus, setTooltipStatus] = useState(0)

  return (
    <>
      <div className="py-12 ">
        <div className="mx-auto container max-w-[228px] px-4 py-4 bg-white rounded relative">
          <p className="text-sm font-semibold leading-none text-gray-800">Tooltip Title</p>
          <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">Tooltip Description will come here!</p>
          <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
          </svg>
          <svg className="absolute   bottom-[-30px]  z-10 cursor-pointer" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2C4.57469 2 2 4.57469 2 7.75C2 10.9253 4.57469 13.5 7.75 13.5C10.9253 13.5 13.5 10.9253 13.5 7.75C13.5 4.57469 10.9253 2 7.75 2Z" stroke="#1F2937" strokeMiterlimit={10} />
            <path d="M6.875 6.875H7.875V10.5" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 10.625H9.25" stroke="#1F2937" strokeMiterlimit={10} strokeLinecap="round" />
            <path d="M7.75 4.0625C7.5893 4.0625 7.43222 4.11015 7.2986 4.19943C7.16499 4.28871 7.06084 4.41561 6.99935 4.56407C6.93785 4.71254 6.92176 4.8759 6.95311 5.03351C6.98446 5.19112 7.06185 5.3359 7.17548 5.44953C7.28911 5.56316 7.43388 5.64054 7.59149 5.67189C7.7491 5.70324 7.91247 5.68715 8.06093 5.62566C8.2094 5.56416 8.3363 5.46002 8.42557 5.3264C8.51485 5.19279 8.5625 5.0357 8.5625 4.875C8.5625 4.65951 8.4769 4.45285 8.32453 4.30048C8.17215 4.1481 7.96549 4.0625 7.75 4.0625Z" fill="#1F2937" />
          </svg>
        </div>
      </div>

      <div className="flex-col md:flex-row flex items-center md:justify-center">
        <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="mr-2 cursor-pointer">
            <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus === 1 && (
            <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded">
              <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                      <g id="Group-2" transform="translate(24.000000, 0.000000)">
                        <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-gray-800 pb-1">Keep track of follow ups</p>
              <p className="text-xs leading-4 text-gray-600 pb-3">Reach out to more prospects at the right moment.</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs font-bold text-indigo-700">Step 1 of 4</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-600 underline mr-2 cursor-pointer">Skip Tour</span>
                  <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">Next</button>
                </div>
              </div>
            </div>
          )}{' '}
        </div>

        <div className="relative my-28 md:my-0 md:mx-40" onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="mr-2 cursor-pointer">
            <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus === 2 && (
            <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-indigo-700 p-4 rounded">
              <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#4c51bf">
                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                      <g id="Group-2" transform="translate(24.000000, 0.000000)">
                        <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-white pb-1">Keep track of follow ups</p>
              <p className="text-xs leading-4 text-white pb-3">Reach out to more prospects at the right moment.</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs font-bold text-white">Step 1 of 4</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white underline mr-2 cursor-pointer">Skip Tour</span>
                  <button className="bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-indigo-700 px-5 py-1 text-xs">Next</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="mr-2 cursor-pointer">
            <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus === 3 && (
            <div role="tooltip" className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-gray-800 p-4 rounded">
              <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#2D3748">
                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                      <g id="Group-2" transform="translate(24.000000, 0.000000)">
                        <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-white pb-1">Keep track of follow ups</p>
              <p className="text-xs leading-4 text-white pb-3">Reach out to more prospects at the right moment.</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs font-bold text-white">Step 1 of 4</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white underline mr-2 cursor-pointer">Skip Tour</span>
                  <button className="bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-gray-600 px-5 py-1 text-xs">Next</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UTooltip
