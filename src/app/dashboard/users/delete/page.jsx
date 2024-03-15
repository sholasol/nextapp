"use client";

import { deleteUser } from "@/app/lib/actions";
import {MdDeleteForever} from 'react-icons/md'
import { useRouter } from 'next/navigation'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import styles from '@/app/ui/dashboard/users/users.module.css';


const DeleteUser = ({user}) => {

    const [state, formAction] = useFormState(deleteUser, undefined)
  const router = useRouter();

  useEffect(() => {
    if(state?.success){
      toast.success("User deleted successfully!");
      router.push("/dashboard/users")
    }
    if(state?.error){
      toast.error("User deletion failed!");
      router.push("/dashboard/users");
    }
    
  }, [state?.success, router]);
    
  return (
    <form action={formAction}>
        <input type="hidden" name="id" value={(user.id)} />
        <button className={`${styles.button} ${styles.delete}`}>
            <MdDeleteForever /> 
        </button>
    </form>
  )
}

export default DeleteUser