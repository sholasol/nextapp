import { connectToDb } from "./connection";
import { User } from "./models"

export const fetchUsers = async (q) => {

    const regex = new RegExp(q, "i");

    try {
        connectToDb();

        const users = await User.find({username: {$regex: regex}});
        return users;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users");
    }
}