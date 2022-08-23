import { useEffect, useState } from "react";
import "./nav.css";


const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            // src="https://upload.wikimedio.org.wikipedia/commons/0/0"
            // src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
            alt="Netflix Logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            />

        <img className="nav__avatar"
            // src="https://upload.wikimedio.org.wikipedia/commons/0/0"
            src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
            alt="Netflix Logo"
            />
        </div>
    );
};

export default Nav;