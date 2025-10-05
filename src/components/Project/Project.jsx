import React, { useState, useEffect } from 'react';
import './Project.css';
import Projects_Data from '../../assets/project_data.js';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    
    return () => document.body.classList.remove("noscroll");
  }, [selectedProject]);

  if (selectedProject) {
    return (
      
      <div className="project-detail" >
           <button 
          className="back-btn" 
          onClick={() => setSelectedProject(null)}
        >
          <FaArrowLeft /> Back
        </button>
         <div className="detail-project">
            <h1 className="detail-title">{selectedProject.title}</h1>
          </div>

        <div className="detail-header">
         

          <div className="detail-left">
            <img 
              src={selectedProject.img} 
              alt={selectedProject.title} 
              className="detail-img"
            />
            <div className="detail-action">
              <div className="detail-live"><a href={selectedProject.live}>Live Demo</a></div>
              <div className="detail-github"><a href={selectedProject.github}>GitHub Repo</a></div>
            </div>
          </div>

          <div className="detail-right">
            <p className="detail-desc">{selectedProject.longDesc}</p>
            <div className="detail-section">
              <h3>Technology</h3>
              
              <div className="tech-list">
                {selectedProject.technologies?.map((tech, idx) => (
                  <span key={idx} className="tech-item">{tech}</span>
                ))}
              </div>

            </div>

            <div className="detail-fitur">
          <h3>Main feature</h3>

                <div className='detail-fitur2'>
                    <ul>
                     {selectedProject.features?.map((feature, idx) => (
                      <React.Fragment key={idx}>
                      <li>{feature}</li>
                        {idx !== selectedProject.features.length - 1 && <hr />} 
                      </React.Fragment>
                        ))}
                    </ul>
                </div>
        
        </div>

          </div>

        </div>

        {/* <div className="detail-fitur">
          <h3>Fitur Utama</h3>

                <div className='detail-fitur2'>
                    <ul>
                     {selectedProject.features?.map((feature, idx) => (
                      <React.Fragment key={idx}>
                      <li>{feature}</li>
                        {idx !== selectedProject.features.length - 1 && <hr />} 
                      </React.Fragment>
                        ))}
                    </ul>
                </div>
        
        </div> */}
      </div>
    );
  }

  return (
    <div className='projects' id="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>

      <div className="projects-container">
        {Projects_Data.map((project) => (
          <div key={project.id} className='projects-format'>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.desc}</p>

            <div 
              className="project-buttons"
              onClick={() => setSelectedProject(project)}
            >
              <p>Read More</p>
              <FaArrowRight className='arrow-icon'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
