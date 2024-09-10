import { mongoose } from "mongoose";
const url = "mongodb+srv://goutambehera466:goutambehera466@cluster0.snwbo.mongodb.net/"
const connectionDb = async () => {
    try {
        const db = await mongoose.connect(url);
        if (db) {
            console.log("DATABASE CONNECTION SUCCESSFULLY DONE.........!!!!");
        } else {
            console.log("Opps!!DATABASE CONNECTION Failded.........!!!!");
        }
    } catch (error) {
        console.log("ERROR In DATABASE", error);
    }
};

export default connectionDb;