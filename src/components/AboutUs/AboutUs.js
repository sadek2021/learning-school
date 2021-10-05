import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h1 className="text-primary">Learning School </h1>
                <p className="text-secondary">Learning skills" is a term that describes the tasks involved in learning, <br /> including time management, note-taking, reading effectively, study skills, and writing tests.</p>
            </div>
            <div className="d-flex align-items-center">
                <img className="w-50" src="https://image.freepik.com/free-vector/teacher-concept-illustration_114360-2166.jpg" alt="" />
                <div>
                    <h2 className="text-primary">We Share World Class Skills</h2>
                    <p className="text-secondary">A skill is the learned ability to perform an action with determined results <br /> with good execution often within a given amount of time, energy, or both.</p>
                </div>
            </div>
            <div>
                <h2 className="text-primary">We just keep growing</h2>
                <p className="text-secondary">We help organizations of all types and sizes prepare for the path ahead — wherever it leads. <br /> Our curated collection of business and technical courses help companies, <br /> governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </div>
        </div>
    );
};

export default AboutUs;