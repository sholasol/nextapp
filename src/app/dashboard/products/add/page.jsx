"use client";

import { useRouter } from 'next/navigation'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import styles from '@/app/ui/dashboard/product/addProduct/addProduct.module.css'
import { addProduct } from '@/app/lib/actions';

const AddProduct = () => {
  const [state, formAction] = useFormState(addProduct, undefined)
  const router = useRouter();

  useEffect(() => {
    if(state?.success){
      toast.success("Product created successfully!");
      router.push("/dashboard/products")
    }
    if(state?.error){
      toast.error("Product creation failed!");
      router.push("/dashboard/products/add");
    }
    
  }, [state?.success, router]);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
        {state?.error && <p className={styles.error}>{state.error}</p>}
      </form>
    </div>
  )
}

export default AddProduct