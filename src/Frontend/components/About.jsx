import React from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <h2 className="pageHeading">ABOUT ME</h2>
            </div>
            <div className="intro">
                <h3>My Name Is Shoeb Khan</h3>
                <h5 className="role">I'm a Fullstack Developer</h5>
            </div>
            <div className="aboutMeDtl">
                <p className="">Results-driven <b>FULL STACK Developer</b> with 2+ years of experience in designing and implementing scalable, high-performance
                    web applications. Proficient in React.js, Node.js, Express.js, and MongoDB, with expertise in RESTful API development,
                    authentication (JWT, bcrypt), state management (Redux, React Hooks), and responsive UI design.</p>
                <br />
                <p>Expertise in both Front-End and Back-End development, with proven track record of solving complexe problems.</p>
                <br />
                <p>Passionate about delivering efficient, secure, and user-friendly applications to
                    drive business success.</p>
            </div>
            <div className="explore">
                <p className="explP">EXPEREINCE</p>
            </div>
            <div className="specltyGroup">
                <div className="maintain">
                    <div className="comp">
                        <i className="bi bi-building"></i>
                        <h5 className="maintainH1">Datapro Information Technology</h5>
                    </div>
                    <div className="role">
                        <i className="bi bi-person"></i>
                        <p>MERN Stack Developer</p>
                    </div>
                    <div className="duration mb-2">
                        <i className="bi bi-calendar2-week"></i>
                        <p>OCT 2023 - PRESENT</p>
                    </div>
                    <p className="maintainPara">Working on Subscription Management, Handles customer's subscription life cycle, ensuring customer satisfaction.</p>
                </div>
                <div className="develop">
                    <div className="comp">
                        <i className="bi bi-building"></i>
                        <h5 className="developH1">Wefivesoft Pvt Ltd</h5>
                    </div>
                    <div className="role">
                        <i className="bi bi-person"></i>
                        <p>Software Engineer</p>
                    </div>
                    <div className="duration mb-2">
                        <i className="bi bi-calendar2-week"></i>
                        <p>FEB 2023 - OCT 2023</p>
                    </div>
                    <p className="devPara">Worked on Stutend Information System (SIS), Digitizes and optimizes school operations through a comprehensive platform.</p>
                </div>
            </div>
        </div>
    )
}