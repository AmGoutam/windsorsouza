import React from 'react'

const Announcement = () => {
    return (
        <section className="conatiner-fluid banner">
            <div className="container pt-5 py-5">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <figure>
                            <img
                                src={
                                    "https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                alt="Banner Image"
                                className="img-fluid img-thumbnail"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center align-items-start flex-column my-3">
                        <div style={{ overflow: "hidden" }}>
                            <span className="text first_text">Big company announcement</span>
                        </div>
                        <p className="text-justify para">Big company announcement
                            or simple sub-header taking two or more lines.
                            Big company announcement or simple sub-header taking two or more lines.</p>
                        <button
                            className="btn btn-primary me-3"
                        >
                            Button
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Announcement
