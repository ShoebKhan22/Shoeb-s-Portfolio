import React from "react";

export const Skills = () => {
    const InUseSkillsList = [
        {icon: <i class="devicon-html5-plain colored"></i>, title: 'HTML5'},
        {icon: <i class="devicon-css3-plain colored"></i>, title: 'CSS3'},
        {icon: <i class="devicon-javascript-plain colored"></i>, title: 'JavaScript'},
        {icon: <i className="devicon-bootstrap-plain colored"></i>, title: 'Bootstrap'},
        {icon: <i class="devicon-vscode-plain colored"></i>, title: 'VScode'},
        {icon: <i class="devicon-reactbootstrap-original colored"></i>, title: 'ReactBootstrap'},
        {icon: <i class="devicon-react-original colored"></i>, title: 'React js'},
        {icon: <i class="devicon-postman-plain colored"></i>, title: 'Postman'},
        {icon: <i class="devicon-npm-original-wordmark colored"></i>, title: 'NPM'},
        {icon: <i class="devicon-nodejs-plain colored"></i>, title: 'Node js'},
        {icon: <i class="devicon-mongodb-plain colored"></i>, title: 'Mongo DB'},
        {icon: <i class="devicon-mongoose-original colored"></i>, title: 'Mongoose'},
        {icon: <i class="devicon-materialui-plain colored"></i>, title: 'Material UI'},
        {icon: <i class="devicon-jira-plain colored"></i>, title: 'JIRA'},
        {icon: <i class="devicon-git-plain colored"></i>, title: 'GIT'},
        {icon: <i class="devicon-github-original colored"></i>, title: 'GitHub'},
        {icon: <i class="devicon-express-original colored"></i>, title: 'Express'},
        
    ]
    const LearningSkillsList = [
        {icon: <i class="devicon-nextjs-original-wordmark colored"></i>, title: 'Next.js'},
        {icon: <i class="devicon-mysql-plain colored"></i>, title: 'My SQL'},
        {icon: <i class="devicon-angular-plain colored"></i>, title: 'Angular.js'}
    ]
    return (
        <div className="skills">
            <div className="skillContainer">
                <h1 className="pageHeading">Skills</h1>
            </div>
            <div className="usingSkill">
                <h3>USING NOW:</h3>
                <div className="usedSkillsDiv">
                    {InUseSkillsList.map((skill, ind) => (
                        <div className="skill-div">
                            <span key={ind} className="skill-icon">{skill.icon}</span>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="learningSkill">
                <h3>LEARNING:</h3>
                <div className="learningSkillsDiv">
                    {LearningSkillsList.map((skill, ind) => (
                        <div className="learn-skill">
                            <span key={ind} className="skill-icon">{skill.icon}</span>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}