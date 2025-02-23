import React from "react";

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projectContainer">
                <h1 className="pageHeading">Projects</h1>
            </div>
            <div className="projectList">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card text-center">
                            <div className="card-header text-center">
                                <i class="bi bi-laptop"></i>
                                <h5 className="projectTitle">Subscription Management</h5>
                            </div>
                            <div className="card-body">
                                <div className="compny">
                                    <i className="bi bi-buildings"></i>
                                    <h6 className="compName card-title">Datapro Information Technology, Pune</h6>
                                </div>
                                <div className="role">
                                    <i className="bi bi-person"></i>
                                    <p>MERN Stack Developer</p>
                                </div>
                                <div className="proDtl">
                                    <i class="bi bi-card-checklist"></i>
                                    <p className="card-text">Digitizes and optimizes school operations through a comprehensive platform.</p>
                                </div>
                                <footer className="blockquote-footer mt-3 mb-0 text-right">OCT 2023 - Present    <cite title="Source Title">In Development</cite></footer>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                        <div className="card text-center">
                            <div className="card-header text-center">
                                <i class="bi bi-laptop"></i>
                                <h5 className="projectTitle">Student Information System</h5>
                            </div>
                            <div className="card-body">
                                <div className="comp">
                                    <i className="bi bi-buildings"></i>
                                    <h6 className="compName card-title">Wefivesoft Private Limited, Pune</h6>
                                </div>
                                <div className="role">
                                    <i className="bi bi-person"></i>
                                    <p>Software Engineer</p>
                                </div>
                                <div className="proDtl">
                                    <i class="bi bi-card-checklist"></i>
                                    <p className="card-text">Digitizes and optimizes school operations through a comprehensive platform.</p>
                                </div>
                                <footer className="blockquote-footer mt-3 mb-0 text-right">FEB 2023 - OCT 2023 <cite title="Source Title">Finished</cite></footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}