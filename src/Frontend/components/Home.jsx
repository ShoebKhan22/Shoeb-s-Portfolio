import React from 'react'
import myPic from '../../Assets/Images/myPic.png'

export const Home = () => {

    return (
        <div className="home">
            <div className="homeContent">
                <div className="myName">
                    <h3 className='greet'>Hi, I am</h3>
                    <h1 className='name'>Shoeb Khan</h1>
                    <p className='role'>MERN / Full Stack Developer</p>
                </div>
            </div>
            <div className="icons">
                <a href="https://github.com/ShoebKhan22" className='iconLink' target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>
                <a href="mailto:iamshoebkhan123@gmail.com" className='iconLink'>
                    <i className="bi bi-envelope-at-fill"></i>
                </a>
                <a href="https://www.linkedin.com/in/shoeb-khan-8b780534b/" className='iconLink' target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>

            </div>
            <div className="image">
                <img src={myPic} className='myImage' alt={myPic} />
            </div>
            <div className="btn">
                <button className="btnCv">
                    <a
                        href={`${process.env.PUBLIC_URL}/Resume/ShoebKhan_MERN_Stack_Developer.pdf`}
                        download="ShoebKhan_MERN_Stack_Developer.pdf">
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    )
}