'use client'
import { Add } from "@/assets/icons";
import { useState } from "react";
import AddNewProductPopup from "./AddNewProductPopup";

export default function AddProductButton() {
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <>
            <button className='flex gap-2 py-2 px-4 border border-slate-800 bg-gray-100/40 dark:bg-gray-800/40 rounded-lg' onClick={togglePopup}>
                <Add />
                <p className="hidden md:block">
                    Add product
                </p>
            </button>
            {showPopup && <AddNewProductPopup onClose={togglePopup} />}
        </>
    )
}

