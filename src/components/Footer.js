import {
    AiFillYoutube,
    AiOutlineLinkedin,
} from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
    return (
        <>
            <section className="container-fluid footer">
                <div className="container">
                    <footer className="py-3">
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-2">
                            <p className="copyRight">
                                Copy Rights © {new Date().getFullYear()}{" "}
                                All rights reserved.
                            </p>
                            <ul className="list-unstyled d-flex">
                                <li className="FooterLi ms-3">
                                    <a
                                        className="footerIcon"
                                        href="#"
                                        target="_blank"
                                        style={{ backgroundColor: "#0d6efd" }}
                                    >
                                        <AiOutlineLinkedin />
                                    </a>
                                </li>
                                <li className="FooterLi ms-3">
                                    <a
                                        className="footerIcon"
                                        href="#"
                                        target="_blank"
                                        style={{ backgroundColor: "#e1306c" }}
                                    >
                                        <BiLogoGmail />
                                    </a>
                                </li>
                                <li className="FooterLi ms-3">
                                    <a
                                        className="footerIcon"
                                        href="#"
                                        target="_blanck"
                                        style={{ backgroundColor: "#25d366" }}
                                    >
                                        <FaWhatsappSquare />
                                    </a>
                                </li>
                                <li className="FooterLi ms-3">
                                    <a
                                        className="footerIcon"
                                        href="#"
                                        target="_blank"
                                        style={{ backgroundColor: "#fa0910" }}
                                    >
                                        <AiFillYoutube />
                                    </a>
                                </li>
                                <li className="FooterLi ms-3">
                                    <a
                                        className="footerIcon"
                                        href="#"
                                        target="_blank"
                                        style={{ backgroundColor: "#1da1f2" }}
                                    >
                                        <MdAddIcCall />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    );
};

export default Footer;