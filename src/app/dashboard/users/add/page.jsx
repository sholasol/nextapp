"use client"

import { addUser } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';
import { useRouter } from 'next/navigation'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify';

const AddUserPage = () => {
  const [state, formAction] = useFormState(addUser, undefined)
  const router = useRouter();

  useEffect(() => {
    if(state?.success){
      toast.success("Registeration Succes!");
      router.push("/dashboard/users")
    }
    if(state?.error){
      toast.error("Registeration failed!");
      router.push("/dashboard/users/add")
    }
    
    //state?.success && router.push("/dashboard/users/add");
  }, [state?.success, router]);
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="username" name="username"  required/>
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="123 Main Address"
        ></textarea>
        <button type="submit">Submit</button>
        {state?.error && <p className={styles.error}>{state.error}</p>}
      </form>
    </div>
  )
}

export default AddUserPage