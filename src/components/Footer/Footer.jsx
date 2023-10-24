import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer py-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center row-gap-3">
                        <div className="col-md-4 p-0 text-center text-md-start">
                            <p className="rights mb-0">© 2023 Ecologytheme. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-4 p-0 text-center">
                            <h2 className="amazon">Amazon</h2>
                        </div>
                        <div className="col-md-4 p-0 text-center text-md-end">
                            <p className="made mb-0 text-capitalize">Made By <span className="name text-main-color">Sara Issa!</span></p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;