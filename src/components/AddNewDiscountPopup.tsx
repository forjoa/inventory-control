'use client'
import { Discount } from "@/types/types"
import { insertNewDiscount } from "@/utils/functions"
import { useState } from "react"

export default function AddNewDiscountPopup({ onClose }: { onClose: any }) {
    const [formData, setFormData] = useState<Discount>({
        discount_percentage: 0,
        start_date: '',
        end_date: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        insertNewDiscount(formData)
        onClose()
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='border border-slate-800 w-3/4 md:w-1/4 bg-gray-300 lg:block dark:bg-gray-900 rounded-lg'>
                <button className='w-full flex pt-6 pb-2 px-8'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 ml-auto self-center'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={onClose}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
                <div className="px-8 pb-8 w-full">
                    <p className="text-xl font-bold">Form to add a new discount</p><br />
                    <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
                        <label htmlFor="percentage">Percentage:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="text" id="percentage" name="percentage" value={formData.discount_percentage} onChange={handleChange} />

                        <label htmlFor="start_date">Start Date:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="date" name="start_date" id="start_date" value={formData.start_date} onChange={handleChange}/>
                        
                        <label htmlFor="end_date">End Date:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="date" name="end_date" id="end_date" value={formData.end_date} onChange={handleChange}/>

                        <br />

                        <input type="submit" value="Submit" className="bg-blue-500 rounded py-2 px-4 cursor-pointer text-white dark:text-dark-800" />
                    </form>

                </div>
            </div>
        </div>
    )
}