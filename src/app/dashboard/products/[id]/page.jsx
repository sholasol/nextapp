import styles from '@/app/ui/dashboard/product/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.jpg" alt="" fill />
        </div>
        <h2>Product Title</h2>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          {/* <input type="hidden" name="id" value={product.id} /> */}
          <label>Title</label>
          <input type="text" name="title" placeholder="product title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="product price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="product stock" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={"color" || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={"product_size" || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="product desc"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default page