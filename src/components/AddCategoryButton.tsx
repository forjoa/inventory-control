'use client'
import { AddCategoryIcon } from "@/assets/icons";
import { useState } from "react";
import AddNewCategoryPopup from "./AddNewCategoryPopup";

export default function AddCategoryButton() {
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <>
            <button className='flex gap-2 py-2 px-4 border border-slate-800 bg-gray-100/40 dark:bg-gray-800/40 rounded-lg' onClick={togglePopup}>
                <AddCategoryIcon />
                <p className="hidden md:block">
                    Category
                </p>
            </button>
            {showPopup && <AddNewCategoryPopup onClose={togglePopup} />}
        </>
    )
}