"use client"
import { errorMessage, successMessage, warningMessage } from '@/utils/toastMessage';
import validate from '@/utils/validate';
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const roleRef = useRef(null)
    const messageRef = useRef(null)
    let refs = { nameRef, emailRef, roleRef, messageRef }
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        role: "",
        message: "",
        options: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setUserData((prevState) => {
                const newOptions = checked
                    ? [...prevState.options, value]
                    : prevState.options.filter((option) => option !== value);

                return {
                    ...prevState,
                    options: newOptions,
                };
            });
        } else {
            setUserData({
                ...userData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, role, message, options } = userData;

        if (validate(name, email, role, message, options, refs)) {
            const option = {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                },
            }
            try {
                const response = await fetch("api/contact", option)
                const results = await response.json();
                if (results.success === true) {
                    successMessage(results.msg);
                    setUserData({
                        name: "",
                        email: "",
                        role: "",
                        message: "",
                        options: []
                    })
                } else {
                    errorMessage(results.msg);
                }
            } catch (error) {
                errorMessage(error.message || "Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <div className='container'>
            <div className="contact_box">
                <div className="">
                    <h2 className="mb-3">Contact</h2>
                    <form className="needs-validation" onSubmit={handleSubmit}>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="name" className="form-label fw-bold">Name</label>
                                <input type="text" className="form-control" id="name" name='name' placeholder="Enter your name" onChange={handleChange} value={userData.name} ref={nameRef} />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="email" className="form-label fw-bold">Email</label>
                                <input type="email" className="form-control" id="email" name='email' placeholder="Enter your email" onChange={handleChange} value={userData.email} ref={emailRef} />
                            </div>
                        </div>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="role" className="form-label fw-bold">Role</label>
                                <select className="form-select" id="role" name="role" onChange={handleChange} value={userData.role} ref={roleRef}>
                                    <option value="">Select Role</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Fullstack Developer">Fullstack Developer</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="message" className="fw-bold mb-3">Message</label>
                            <div className="form-floating mt-2">
                                <textarea className="form-control" placeholder="Your message" id="message" name='message' onChange={handleChange} value={userData.message} ref={messageRef}></textarea>
                            </div>
                        </div>
                        <h4 className="mb-3">Opt-In</h4>
                        <div className="my-3">
                            <div className="form-check">
                                <input id="marketing_emails" type="checkbox" className="form-check-input" name="options" value="Marketing Emails" onChange={handleChange} checked={userData.options.includes("Marketing Emails")} />
                                <label className="form-check-label" htmlFor="marketing_emails">Marketing Emails</label>
                            </div>
                            <div className="form-check">
                                <input id="NewsandUpdatesEmails" type="checkbox" className="form-check-input" name="options" value="News and Updates Emails" onChange={handleChange} checked={userData.options.includes("News and Updates Emails")} />
                                <label className="form-check-label" htmlFor="NewsandUpdatesEmails">News and Updates Emails</label>
                            </div>
                            <div className="form-check">
                                <input id="ProductionProcessEmails" type="checkbox" className="form-check-input" name="options" value="Production Process Emails" onChange={handleChange} checked={userData.options.includes("Production Process Emails")} />
                                <label className="form-check-label" htmlFor="ProductionProcessEmails">Production Process Emails</label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
