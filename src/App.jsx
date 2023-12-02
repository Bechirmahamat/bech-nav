import { useState, useRef } from "react";
import { social, links } from "./data";
import { BsGrid3X3Gap } from "react-icons/bs";

function App() {
    const [show, setShow] = useState(false);
    const getContainer = useRef(null);
    const getHeight = useRef(null);

    const styleAuto = {
        height: `${
            show ? getHeight.current.getBoundingClientRect().height + 5 : 0
        }px`,
    };
    const Toggle = () => {
        setShow(!show);
    };

    return (
        <>
            <div className="navbar">
                <nav className="navbar-center">
                    <div className="logo-container">
                        <h4 className="logo">
                            Coding <span className="color">Addict</span>
                        </h4>
                        <button className="toggle-icon" onClick={Toggle}>
                            <BsGrid3X3Gap className="" />
                        </button>
                    </div>
                    <div
                        className="links-container"
                        ref={getContainer}
                        style={styleAuto}
                    >
                        <ul className="links" ref={getHeight}>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id} className="link">
                                        {text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="social-icons">
                        <ul className="social-ul">
                            {social.map((soc) => {
                                const { id, url, icon } = soc;
                                return <li key={id}>{icon}</li>;
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default App;
