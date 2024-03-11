"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connection";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'

export const addUser = async (previousState, formData) => {

    const {
        username, 
        email, 
        password, 
        phone, 
        address, 
        isAdmin, 
        isActive} = Object.fromEntries(formData);

        // Check if required fields are empty
        if (!username || !email || !password || !address) {
            return { error: "mandatory fields cannot be empty" };
        }

        try {
            connectToDb();

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt)

           const newUser = new User({
            username, 
            email, 
            password: hashPassword, 
            phone, 
            address, 
            isAdmin,
            isActive
           });
           await newUser.save();
           return {success:true};

        } catch (error) {
            console.log(error)
             return {error: "Failed to create user"};
        }
        revalidatePath("/dashboard/users");
        redirect("/dashboard/users");
}

export const updateUser = async (previousState, formData) => {
    const {
        id,
        username, 
        email, 
        password: hashPassword, 
        phone, 
        address, 
        isAdmin,
        isActive
     } = Object.fromEntries(formData)

     try {
        connectToDb();
        const updateFields = {
            username, 
            email, 
            password: hashPassword, 
            phone, 
            address, 
            isAdmin,
            isActive
        };

        Object.keys(updateFields).forEach(
            (key) =>
            (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
        return {success:true};

     } catch (error) {
        console.log(error)
        return {error:"Failed to update user"};
     }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const addProduct = async (previousState, formData) => {
    const {
            title,
            desc,
            price,
            stock,
            color,
            size,
    } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });
        await newProduct.save();
        return {success:true};
    } catch (error) {
        console.log(error);
        return {error:"Failed to create product"};
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}

export const updateProduct = async (previousState, formData) => {
    const {
            id,
            title,
            desc,
            price,
            stock,
            color,
            size,
    } = Object.fromEntries(formData);

    try {
        connectToDb();
        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };
        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key] ==="" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
        return {success:true};
    } catch (error) {
        console.log(error);
        return {error:"Failed to update product"};
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}