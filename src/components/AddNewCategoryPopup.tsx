'use client'
import { insertNewCategory } from "@/utils/functions"
import { useState } from "react"

export default function AddNewCategoryPopup({ onClose }: { onClose: any }) {
    const [newCategory, setNewCategory] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        insertNewCategory(newCategory)
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
                    <p className="text-xl font-bold">Form to add a new category</p><br />
                    <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="text" id="name" name="name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />

                        <br />

                        <input type="submit" value="Submit" className="bg-blue-500 rounded py-2 px-4 cursor-pointer text-white dark:text-dark-800" />
                    </form>

                </div>
            </div>
        </div>
    )
}