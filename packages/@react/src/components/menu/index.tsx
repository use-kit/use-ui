import React, { useState } from 'react'

const UMenu: React.FC = () => {
  const [techType, setTechType] = useState('html')

  return (
    <>
      <div id="filters" className="bg-transparent border-2 border-gray-200 dark:border-gray-800 rounded flex items-center">
        <div onClick={() => setTechType('html')} className={techType === 'html' ? 'text-brand bg-gray-100 dark:bg-gray-800 w-16 h-16 flex justify-center items-center ' : 'w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}>
          <svg width={25} height={32} viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.038 0H0V32H25V4.962L20.038 0ZM12.671 7.759H14.186L15.095 11.177L15.994 7.759H17.512V12.77H16.572V8.825L15.577 12.769H14.603L13.612 8.825V12.769H12.672V7.759H12.671ZM8.05 7.759H12.032V8.607H10.549V12.77H9.537V8.606H8.05V7.759ZM4.369 12.77H3.357V7.759H4.369V9.731H6.351V7.759H7.363V12.77H6.351V10.579H4.369V12.77ZM19.993 25.041H5.007V24.041H19.993V25.041ZM19.993 21.5H5.007V20.5H19.993V21.5ZM22.071 12.77H18.544V7.8H19.556V11.926H22.072V12.77H22.071Z" fill="currentColor" />
          </svg>
        </div>
        <div onClick={() => setTechType('angular')} className={techType === 'angular' ? 'text-brand bg-gray-100 dark:bg-gray-800 w-16 h-16 flex justify-center items-center ' : 'w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}>
          <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331L35.5 8.86665L33.1367 29.3833L20 36.6666L6.86333 29.3833L4.5 8.86665L20 3.33331ZM20 7.01665L10.31 28.7666H13.9233L15.8717 23.9H24.095L26.045 28.7666H29.6567L20 7.01665ZM22.83 20.9H17.17L20 14.0833L22.83 20.9Z" fill="currentColor" />
          </svg>
        </div>
        <div onClick={() => setTechType('react')} className={techType === 'react' ? 'text-brand bg-gray-100 dark:bg-gray-800 w-16 h-16 flex justify-center items-center ' : 'w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}>
          <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.0799 27.0667C23.1875 28.3358 22.2149 29.5465 21.1682 30.6917C23.9549 33.3967 26.5482 34.6634 27.9849 33.8317C29.4249 33.0017 29.6232 30.1234 28.6749 26.3584C27.2532 26.675 25.7082 26.915 24.0799 27.0667ZM21.8966 27.2117C20.6327 27.264 19.3671 27.264 18.1032 27.2117C18.7316 28.0317 19.3666 28.7917 19.9999 29.485C20.6332 28.7917 21.2666 28.0317 21.8966 27.2117ZM30.2966 14.055C34.7382 15.3284 37.6382 17.445 37.6382 20C37.6382 22.555 34.7382 24.6717 30.2966 25.945C31.4132 30.4284 31.0316 33.9984 28.8199 35.275C26.6066 36.5534 23.3232 35.1 19.9999 31.8917C16.6766 35.1 13.3932 36.5534 11.1799 35.275C8.96824 33.9984 8.58491 30.4284 9.70324 25.945C5.26157 24.6717 2.36157 22.555 2.36157 20C2.36157 17.445 5.26157 15.3284 9.70324 14.055C8.58657 9.5717 8.96824 6.0017 11.1799 4.72503C13.3932 3.4467 16.6766 4.90003 19.9999 8.10837C23.3232 4.90003 26.6066 3.4467 28.8199 4.72503C31.0316 6.0017 31.4149 9.5717 30.2966 14.055ZM28.6749 13.6417C29.6249 9.87504 29.4249 6.99837 27.9866 6.16837C26.5482 5.3367 23.9549 6.60337 21.1699 9.30837C22.1549 10.38 23.1349 11.5984 24.0799 12.9334C25.7099 13.0834 27.2532 13.3234 28.6749 13.6417ZM11.3249 26.3584C10.3749 30.125 10.5749 33.0017 12.0132 33.8317C13.4516 34.6634 16.0449 33.3967 18.8299 30.6917C17.7838 29.5465 16.8118 28.3357 15.9199 27.0667C14.3747 26.9286 12.8399 26.692 11.3249 26.3584ZM18.1032 12.7884C19.3671 12.736 20.6327 12.736 21.8966 12.7884C21.2974 12.0041 20.6646 11.2462 19.9999 10.5167C19.3666 11.21 18.7332 11.97 18.1032 12.79V12.7884ZM15.9199 12.9334C16.8129 11.6643 17.786 10.4535 18.8332 9.30837C16.0449 6.60337 13.4499 5.3367 12.0149 6.16837C10.5749 6.99837 10.3766 9.8767 11.3249 13.6417C12.7466 13.325 14.2916 13.085 15.9199 12.9334ZM23.1566 25.4667C24.343 23.7256 25.3976 21.8983 26.3116 20C25.3976 18.1017 24.343 16.2744 23.1566 14.5334C21.0551 14.376 18.9447 14.376 16.8432 14.5334C15.6568 16.2744 14.6022 18.1017 13.6882 20C14.6022 21.8983 15.6568 23.7256 16.8432 25.4667C18.9447 25.624 21.0551 25.624 23.1566 25.4667ZM25.2966 25.2484C26.3216 25.115 27.2966 24.9434 28.2132 24.7417C27.9135 23.8013 27.5732 22.8743 27.1932 21.9634C26.6066 23.0835 25.9738 24.1789 25.2966 25.2467V25.2484ZM14.7032 14.75C13.6782 14.8834 12.7032 15.055 11.7866 15.2567C12.0699 16.15 12.4099 17.08 12.8066 18.035C13.3933 16.9149 14.026 15.8195 14.7032 14.7517V14.75ZM11.7866 24.74C12.7032 24.9417 13.6782 25.1117 14.7032 25.2467C14.026 24.1789 13.3933 23.0835 12.8066 21.9634C12.4099 22.9167 12.0699 23.8467 11.7866 24.74ZM10.1566 24.3317C10.5916 22.9417 11.1566 21.485 11.8399 19.9984C11.1566 18.5117 10.5916 17.055 10.1566 15.665C6.41991 16.7267 4.02824 18.3384 4.02824 19.9984C4.02824 21.6584 6.41991 23.27 10.1566 24.3317ZM28.2132 15.2567C27.2966 15.055 26.3216 14.885 25.2966 14.75C25.9738 15.8179 26.6066 16.9132 27.1932 18.0334C27.5899 17.08 27.9299 16.15 28.2132 15.2567ZM29.8432 15.665C29.4082 17.055 28.8432 18.5117 28.1599 19.9984C28.8432 21.485 29.4082 22.9417 29.8432 24.3317C33.5799 23.27 35.9716 21.6584 35.9716 19.9984C35.9716 18.3384 33.5799 16.7267 29.8432 15.665ZM19.9999 23.1334C19.5884 23.1334 19.181 23.0523 18.8008 22.8949C18.4207 22.7374 18.0753 22.5066 17.7843 22.2156C17.4933 21.9247 17.2625 21.5793 17.1051 21.1991C16.9476 20.819 16.8666 20.4115 16.8666 20C16.8666 19.5886 16.9476 19.1811 17.1051 18.801C17.2625 18.4208 17.4933 18.0754 17.7843 17.7844C18.0753 17.4935 18.4207 17.2627 18.8008 17.1052C19.181 16.9477 19.5884 16.8667 19.9999 16.8667C20.8309 16.8667 21.6279 17.1968 22.2155 17.7844C22.8031 18.372 23.1332 19.169 23.1332 20C23.1332 20.831 22.8031 21.628 22.2155 22.2156C21.6279 22.8033 20.8309 23.1334 19.9999 23.1334Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div onClick={() => setTechType('vue')} className={techType === 'vue' ? 'text-brand bg-gray-100 dark:bg-gray-800 w-16 h-16 flex justify-center items-center ' : 'w-16 h-16 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}>
          <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66675 5H8.33341L20.0001 25L31.6667 5H38.3334L20.0001 36.6667L1.66675 5ZM16.1117 5L20.0001 11.6667L23.8884 5H30.6134L20.0001 23.3333L9.38675 5H16.1117Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default UMenu
