'use client'
import { supabase } from '@/database/database_connection'
import { Category, Product } from '@/types/types'
import { insertNewProduct } from '@/utils/functions'
import { useEffect, useState } from 'react'

export default function AddNewProductPopup({ onClose }: { onClose: any }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<Product>({
    product_id: 0,
    name: '',
    description: '',
    price: 0,
    cost: 0,
    size: '',
    weight: 0,
    stock: 0,
    bar_code: '',
    created_at: '',
    category_id: 0,
    discount_id: 0,
  })

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    insertNewProduct(formData)
    onClose()
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await supabase.from('categories').select();
      const categoriesData: Category[] = response.data || [];
      setCategories(categoriesData);
    } catch (error : any) {
      console.error('Error fetching categories:', error.message);
    }
  }    

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='border border-slate-800 w-3/4 md:w-1/4 bg-gray-100 lg:block dark:bg-gray-900 rounded-lg'>
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
        <div className='px-8 pb-8 w-full'>
          <p className='text-xl font-bold'>Form to add a new product</p>
          <br />
          <form className='w-full flex flex-col gap-1' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor='description'>Description:</label>
            <textarea
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <label htmlFor='price'>Price:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='number'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleChange}
            />

            <label htmlFor='cost'>Cost:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='number'
              id='cost'
              name='cost'
              value={formData.cost}
              onChange={handleChange}
            />

            <label htmlFor='size'>Size:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='text'
              id='size'
              name='size'
              value={formData.size}
              onChange={handleChange}
            />

            <label htmlFor='weight'>Weight:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='number'
              id='weight'
              name='weight'
              value={formData.weight}
              onChange={handleChange}
            />

            <label htmlFor='stock'>Stock:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='number'
              id='stock'
              name='stock'
              value={formData.stock}
              onChange={handleChange}
            />

            <label htmlFor='bar_code'>Bar Code:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='text'
              id='bar_code'
              name='bar_code'
              value={formData.bar_code}
              onChange={handleChange}
            />

            <label htmlFor='category_id'>Select a category:</label>
            <select name='category_id' id='category_id' className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none' onChange={handleChange}>
              {categories.map((category, index) => {
                return (
                  <option value={category.category_id} key={index}>
                    {category.name}
                  </option>
                )
              })}
            </select>

            <label htmlFor='discount_id'>Discount ID:</label>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              spellCheck='false'
              type='number'
              id='discount_id'
              name='discount_id'
              value={formData.discount_id}
              onChange={handleChange}
            />

            <br />

            <input
              type='submit'
              value='Submit'
              className='bg-blue-500 rounded py-2 px-4 cursor-pointer'
            />
          </form>
        </div>
      </div>
    </div>
  )
}
