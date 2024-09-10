"use client"
import { useRef } from "react";
import { warningMessage } from "./toastMessage";

const validate = (name, email, role, message, refs) => {
    const { nameRef, emailRef, roleRef, messageRef } = refs;
    if (name.trim() === "") {
        warningMessage("Please fill in your name.");
        if (nameRef?.current) nameRef.current.style.border = "2px solid red";
        return false;
    } else {
        if (nameRef?.current) nameRef.current.style.border = "";
    }
    if (email.trim() === "") {
        warningMessage("Please fill in your email.");
        if (emailRef?.current) emailRef.current.style.border = "2px solid red";
        return false;
    } else {
        if (emailRef?.current) emailRef.current.style.border = "";
    }
    if (role.trim() === "") {
        warningMessage("Please select your role.");
        if (roleRef?.current) roleRef.current.style.border = "2px solid red";
        return false;
    } else {
        if (roleRef?.current) roleRef.current.style.border = "";
    }
    if (message.trim() === "") {
        warningMessage("Please enter your message.");
        if (messageRef?.current) messageRef.current.style.border = "2px solid red";
        return false;
    } else {
        if (messageRef?.current) messageRef.current.style.border = "";
    }
    return true;
};
export default validate;