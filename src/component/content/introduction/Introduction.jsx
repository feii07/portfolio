import React from "react";
import './Introduction.css';

const Introduction = () => {
    return (
        <div className="d-flex h-full home-bg" id="introduction">
            <div className="m-auto">
                <span className="greet">HELLO !</span><br />
                <span>I am Web Developer and UI Designer</span><br />
                <button className="btn btn-outline-light my-3" onClick={() => {
                    const anchor = document.querySelector('#about')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}> Check More ! </button>
            </div>
        </div>
    )
}

export default Introduction;