"use client";

import { authenticate } from '@/app/lib/actions'
import styles from  './loginForm.module.css'
import { useState } from 'react';
// import { useFormState } from "react-dom";

const LoginForm = () => {
    // const [state, formAction] = useFormState(authenticate, undefined);
    
     const [err, setErr] = useState();

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); // Collect form data
        const email = formData.get('email'); // Get email from form data
        const password = formData.get('password'); // Get password from form data
        
        try {
            await authenticate(null, { email, password }); // Call authenticate function with form data
        } catch (error) {
            console.log(error)
            setErr("Wrong credentials"); // Set error state if authentication fails
        }
    };

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {err && <p>{err}</p>}
    </form>
  )
}

export default LoginForm