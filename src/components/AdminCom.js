"use client";
import { errorMessage, successMessage } from '@/utils/toastMessage';
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer } from "react-toastify";

const AdminCom = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllData = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/contact");
            const data = await response.json();
            setUserData(data.results);
        } catch (error) {
            errorMessage("Failed to fetch data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

    const deleteUser = async (id) => {
        console.log("Attempting to delete user with ID:", id);
        try {
            if (confirm("Are you sure you want to delete this user?")) {
                const res = await fetch(`/api/contact/${id}`, {
                    method: "DELETE",
                });
                const jsonData = await res.json();
                getAllData();
                successMessage(jsonData.msg);
            } else {
                successMessage("Don't worry, your data is safe.");
            }
        } catch (error) {
            errorMessage("Something went wrong. Please try again.");
            console.error("Delete Error:", error);
        }
    };

    return (
        <>
            <section className="container dashboard">
                <h2 className="container text-center text-capitalize">All User Details</h2>
                <div className="tableDiv table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Role</th>
                                <th scope="col">Options</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="text-center fs-4">Loading...</td>
                                </tr>
                            ) : userData.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center fs-4">No Data Available</td>
                                </tr>
                            ) : (
                                userData.map((element, index) => (
                                    <tr key={element._id}>
                                        <td>{index + 1}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.message}</td>
                                        <td>{element.role}</td>
                                        <td>{element.options.join(", ")}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger me-2"
                                                onClick={() => deleteUser(element._id)}
                                            >
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default AdminCom;
