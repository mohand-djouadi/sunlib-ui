import React from 'react'
import FiltersCheckbox from '../FiltersCheckbox/FiltersCheckbox'

const BookFilters = () => {
    return (
        <div className="bg-banner-bg p-4 w-[27%] border-t-3 border-r-3 border-b-3 border-t-secondary border-r-secondary border-b-secondary rounded-tr-2xl rounded-br-2xl h-[100%] max-sm:w-[100%] max-sm:rounded-none">
            <h2 className="font-primary text-secondary text-3xl text-center">
                Filters
            </h2>
            <div>
                <div>
                    <h4 className="font-primary text-secondary text-1xl">
                        Categories
                    </h4>
                    <div className="max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:gap-1 max-sm:items-center">
                        <FiltersCheckbox text="Fantasia" />
                        <FiltersCheckbox text="Fiction" />
                        <FiltersCheckbox text="Comedy" />
                        <FiltersCheckbox text="Horror" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col-reverse">
                        <input
                            className="accent-secondary"
                            type="range"
                            name="price"
                            id="price"
                        />
                        <label
                            className="mt-px cursor-pointer select-none font-light text-secondary font-primary"
                            htmlFor="price"
                        >
                            Price Range
                        </label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input
                            className="accent-secondary"
                            type="range"
                            name="rate"
                            id="rate"
                        />
                        <label
                            className="mt-px cursor-pointer select-none font-light text-secondary font-primary"
                            htmlFor="rate"
                        >
                            Rate Range
                        </label>
                    </div>
                    <div className="flex flex-col-reverse">
                        <input
                            className="accent-secondary"
                            type="range"
                            name="reads"
                            id="reads"
                        />
                        <label
                            className="mt-px cursor-pointer select-none font-light text-secondary font-primary"
                            htmlFor="reads"
                        >
                            Reads Range
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookFilters
