


const Page = () => {

    const handleForm = async (formData) => {
        "use server"
        console.log(formData);
        const username = formData.get("username")
        console.log("Hello User", username)
    }

  return (
    <form action={handleForm}>
        <input type="text" name="username"/>
        <button>Send</button>
    </form>
  )
}

export default Page