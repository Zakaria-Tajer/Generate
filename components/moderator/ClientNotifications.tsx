import Image from "next/image";
import React from "react";

export const ClientNotifications = () => {
  return (
    <div
      className="w-full max-w-md p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          New notification
        </span>
        <div className="flex ml-auto space-x-2">
            {/* Todo:click event */}
          <span className="mb-1 ml-auto cursor-pointer text-sm font-semibold text-gray-900 dark:text-white">
            <Image
              src="/images/icons/5107639.png"
              width="20"
              height="20"
              alt="info"
            />
          </span>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-notification"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          {/* <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image"> */}
          <div className="w-12 h-12 rounded-full bg-gray-400"></div>
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="ml-3 text-sm font-normal">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
            Bonnie Green
          </h4>
          <div className="text-sm font-normal">commmented on your photo</div>
          <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
            a few seconds ago
          </span>
        </div>
      </div>
    </div>
  );
};
