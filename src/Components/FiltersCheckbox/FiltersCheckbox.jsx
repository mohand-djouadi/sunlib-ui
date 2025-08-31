import React from 'react'

const FiltersCheckbox = ({ text }) => {
    return (
        <div class="flex flex-row items-center">
            <label
                data-ripple-dark="true"
                for={text}
                class="relative flex cursor-pointer items-center rounded-full p-3"
            >
                <input
                    id={text}
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary checked:bg-secondary checked:before:bg-secondary hover:before:opacity-10"
                    type="checkbox"
                />
                <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"></span>
            </label>
            <label
                for={text}
                class="mt-px cursor-pointer select-none font-light text-secondary font-primary"
            >
                {text}
            </label>
        </div>
    )
}

export default FiltersCheckbox
