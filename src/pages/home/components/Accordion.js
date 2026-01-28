import React, { useState } from "react";

// SVGs defined outside the component for performance reasons
const openSvg = (
    <svg
        data-accordion-icon
        className="w-4 h-4 shrink-0 text-primary-500 transition-transform duration-200 ease-in-out"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
        />
    </svg>
);

const closeSvg = (
    <svg
        data-accordion-icon
        className="w-4 h-4 rotate-180 shrink-0 text-primary-500 transition-transform duration-200 ease-in-out"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
        />
    </svg>
);

export const Accordion = ({ faq, index }) => {
    const [open, setOpen] = useState(false);

    // Dynamically generate unique ID for each FAQ item
    const accordionId = `accordion-collapse-body-${index}`;
    const headingId = `accordion-collapse-heading-${index}`;

    return (
        <div id={`accordion-collapse-${index}`} data-accordion="collapse" className="mb-4">
            <h2 id={headingId}>
                <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-semibold text-left text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 ease-in-out transform ${open ? 'bg-gray-200' : ''}`}
                    data-accordion-target={`#${accordionId}`}
                    aria-expanded={open}
                    aria-controls={accordionId}
                >
                    <span className={`text-lg ${open ? 'text-primary-500' : 'text-gray-700'}`}>
                        {faq.question}
                    </span>
                    {open ? openSvg : closeSvg}
                </button>
            </h2>
            <div
                id={accordionId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] py-5' : 'max-h-0'}`}
                role="region"
                aria-labelledby={headingId}
            >
                <div className="p-5 bg-gray-50 border-t border-gray-300 rounded-b-lg">
                    <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};
