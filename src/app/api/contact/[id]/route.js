import connectionDb from "@/db/conn";
import { Contact } from "@/models/contact";
import { NextResponse } from "next/server";


const DELETE = async (req, res) => {
    try {
        await connectionDb();
        const id = await res.params.id;
        const results = await Contact.findByIdAndDelete({ _id: id });
        return NextResponse.json({ msg: "Data Successfully Delete", results });
    } catch (error) {
        return NextResponse.json({
            msg: "Somthing is wrong please try again DELETE",
            error,
        });
    }
};

export { DELETE };