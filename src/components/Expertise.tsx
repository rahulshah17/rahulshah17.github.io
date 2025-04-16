import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    ".NET",
    "C#",
    "HTML5",
    "CSS3",
    "SQL",
    "RestAPI",
    "GraphQL",
    "PostgreSQL",
    "NoSQL",
];

const labelsSecond = [
    "Git",
    "Agile Methodologies",
    "SDLC",
    "CI/CD",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Pandas",
    "sklearn"
];

const labelsThird = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "RAG",
    "Agentic Workflow",
    "Fine-Tuning",
    "OpenAI",
    "LLaMA",
    "LangChain",
    "LlamaIndex",
    "PEFT",
    "LoRA/QLoRA",
    "Hugging Face",
    "Docker",
    "FastAPI"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
            <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I have hands-on experience building and deploying GenAI applications, 
                        including RAG systems with multimodal input using LangChain, FAISS, and LLaMA models. 
                        I’ve fine-tuned large language models with techniques like LoRA and QLoRA, 
                        and I have a strong understanding of tokenization, low-rank adaptation, 
                        and evaluation metrics. I have deployed end-to-end integration of LLMs into production-ready web applications</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built and maintained scalable web applications 
                        using frameworks like Angular, React, .NET, and Node.js. I’ve developed robust frontend interfaces with 
                        TypeScript, RxJS, and component libraries like PrimeNG and Material UI, while also designing secure 
                        backend APIs, managing databases with SQL, and integrating cloud services like Azure and AWS. My work 
                        includes end-to-end development, version control with Git, CI/CD pipelines, and delivering user-centric 
                        solutions in agile environments.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>CI/CD & SDLC</h3>
                    <p>I follow end-to-end best practices across the Software Development Life Cycle (SDLC), from planning to development, 
                        testing, and deployment. I'm well-versed in Git for version control, including 
                        branching strategies and rebasing. I’ve implemented CI/CD pipelines using 
                        tools like Jenkins, Azure DevOps, and Docker for smooth, automated deployments. Additionally, I have experience 
                        with MLOps practices—managing model versioning, reproducibility, and monitoring—ensuring scalable and maintainable 
                        ML model deployment in production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;