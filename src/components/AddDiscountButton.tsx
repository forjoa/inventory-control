'use client'
import { AddDiscountIcon } from "@/assets/icons";
import { useState } from "react";
import AddNewDiscountPopup from "./AddNewDiscountPopup";

export default function AddDiscountButton() {
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <>
            <button className='flex gap-2 py-2 px-4 border border-slate-800 bg-gray-100/40 dark:bg-gray-800/40 rounded-lg' onClick={togglePopup}>
                <AddDiscountIcon />
                <p className="hidden md:block">
                    Discount
                </p>
            </button>
            {showPopup && <AddNewDiscountPopup onClose={togglePopup} />}
        </>
    )
}