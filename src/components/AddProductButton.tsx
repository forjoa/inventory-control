'use client'
import { Add } from "@/assets/icons";

export default function AddProductButton() {
    return (
        <button className='flex gap-2 py-2 px-4 border border-slate-800 bg-gray-100/40 dark:bg-gray-800/40 rounded-lg'>
            <Add />
            <p>
                Add product
            </p>
        </button>
    )
}