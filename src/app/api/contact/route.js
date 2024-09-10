import connectionDb from "@/db/conn";
import { Contact } from "@/models/contact";
import { NextResponse } from "next/server";

const GET = async () => {
    try {
        await connectionDb();
        const results = await Contact.find();
        return NextResponse.json({ msg: "Contact Details", results, success: true });
    } catch (error) {
        return NextResponse.json({
            msg: "Somthing is wrong please try again",
            error,
            success: false
        });
    }
};

const POST = async (req, res) => {
    try {
        await connectionDb();
        const payload = await req.json();
        console.log("payload", payload)
        const results = await Contact.create(payload);

        return NextResponse.json({
            msg: "Message Successfully Send",
            results,
            success: true
        });
    } catch (error) {
        return NextResponse.json({
            msg: "Somthing is wrong please try again",
            error,
            success: false
        });
    }
};

export { GET, POST };