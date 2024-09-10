import Link from "next/link";
import React from "react";

const notfound = () => {
    return (
        <>
            <div className="error">
                <h1 className="code">404</h1>
                <h2 className="desc">
                    Ooops!!! The page you are looking for is not found
                </h2>
                <Link href="/" className="btn btnBackClr mt-3">
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default notfound;