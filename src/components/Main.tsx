import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/dp.jpg';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

function Main() {
  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1_8Gv2EvKzcuhBthbRZ8CIYh9MKbdaohg/view?usp=sharing'
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="container">
      <div className="about-section">
        <div>
          <img src={profilePic} alt="Professional headshot" style={{width:"220px",height:"300px", borderRadius:"10%"}}/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/rahulshah1799/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/rahulshah17/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a 
              href="mailto:rhshah@umass.edu" 
              target="_blank" 
              rel="noreferrer noopener"
              aria-label="Send email to rhshah@umass.edu"
              title="Send me an email"
            >
              <EmailIcon />
            </a>
          </div>
          <h1>Rahul Hemal Shah</h1>
          <p>Grad Student @University of Massachusetts Amherst</p>
          <Button 
            sx={{ 
              color: '#fff', 
              border: '2px solid #777',
              '&:hover': {
                border: '2px solid #3e3',
              }
            }} 
            onClick={() => downloadResume()}
          >
            <b>Download Resume </b>
          </Button>
          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/rahulshah1799/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/rahulshah17/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a 
              href="mailto:rhshah@umass.edu" 
              target="_blank" 
              rel="noreferrer noopener"
              aria-label="Send email to rhshah@umass.edu"
              title="Send me an email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;