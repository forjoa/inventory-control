import { Product } from "@/types/types"

const EditProductFormPopup = ({ product, onClose }: { product: Product, onClose: any }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='border border-slate-800 w-1/4 bg-gray-100 lg:block dark:bg-gray-900 ml-5 my-5 rounded-lg'>
                <button className='absolute top-0 right-0 p-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
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
                <div className="p-8 w-full">
                    <p className="text-xl font-bold">Form to edit a product:</p><br />
                    <form className="w-full flex flex-col gap-1">
                        <label htmlFor="name">Name:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="text" id="name" name="name" value={product.name} />

                        <label htmlFor="description">Description:</label>
                        <textarea className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" id="description" name="description" value={product.description}></textarea>

                        <label htmlFor="price">Price:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="number" id="price" name="price" value={product.price} />

                        <label htmlFor="cost">Cost:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p- outline-none" spellCheck="false" type="number" id="cost" name="cost" value={product.cost} />

                        <label htmlFor="size">Size:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="text" id="size" name="size" value={product.size} />

                        <label htmlFor="weight">Weight:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="number" id="weight" name="weight" value={product.weight} />

                        <label htmlFor="stock">Stock:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="number" id="stock" name="stock" value={product.stock} />

                        <label htmlFor="bar_code">Bar Code:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="text" id="bar_code" name="bar_code" value={product.bar_code} />

                        <label htmlFor="category_id">Category ID:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="number" id="category_id" name="category_id" value={product.category_id} />

                        <label htmlFor="discount_id">Discount ID:</label>
                        <input className="bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none" spellCheck="false" type="number" id="discount_id" name="discount_id" value={product.discount_id} />

                        <br />

                        <input type="submit" value="Submit" className="bg-blue-500 rounded py-2 px-4" />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditProductFormPopup