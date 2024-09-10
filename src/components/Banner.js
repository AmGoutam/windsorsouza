"use client";
import Link from "next/link";

const Banner = ({ imageSrc }) => {
    return (
        <>
            <section className="conatiner-fluid banner">
                <div className="container pt-5 py-5">
                    <div className="row column-reverse-mobile">
                        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-start flex-column my-3">
                            <div style={{ overflow: "hidden" }}>
                                <span className="text first_text">Showcase your thought provoking topics and ideas</span>
                            </div>
                            <p className="text-justify para">Big company announcement
                                or simple sub-header taking two or more lines.Big company announcement
                                or simple sub-header taking two or more lines.</p>
                            <div className="bannerBtn">
                                <button
                                    className="btn btn-primary me-3 btn-sm"
                                >
                                    Button
                                </button>
                                <button
                                    className="btn btn-link"
                                >
                                    Text-link
                                </button>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12">
                            <figure>
                                <img
                                    src={imageSrc}
                                    alt="Banner Image"
                                    className="img-fluid img-thumbnail"
                                    loading="lazy"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;