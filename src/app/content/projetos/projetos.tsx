"use client";

import React, { useState } from 'react';
import LetterPullup from '../../components/animation/letterPullpup/letterPullpup'; // Ajuste o caminho conforme necessário
import { ModalProps } from '@/data/interfaces/projetosInterface';
import { Project } from '@/data/interfaces/projetosInterface';
import { projects } from '@/data/projetos/projetosData';
import { FaGithub } from 'react-icons/fa';

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const iconClass = "h-8 w-8 mb-2 transition-transform duration-300";

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button className="text-gray-500 absolute top-4 right-4" onClick={onClose}>X</button>
        <div style={{ height: '430px', overflowY: 'auto' }}> {/* Altura fixa e barra de rolagem */}
          <h3 className="text-2xl text-gray-800 font-bold mb-4">{project.title}</h3>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
          <p className="text-gray-600 mb-2">{project.category}</p>
          <p className="text-gray-600 mb-4">Tecnologias: {project.technologies.join(', ')}</p>
          <p className="text-gray-600 mb-4">{project.details}</p>
          <p className="text-gray-600 mb-4">{project.contribution}</p>
          <p className="text-gray-600 mb-4">{project.hardskills}</p>
          <p className="text-gray-600 mb-4">{project.softskills}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGithub className={`${iconClass} text-black hover:text-purple-500`} />
          </a>
        </div>
      </div>
</div>
  );
};

const Projetos: React.FC = () => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="mb-12 px-6 sm:px-12 lg:px-24">
      <div style={{ userSelect: 'none' }}><LetterPullup words="Principais Projetos" delay={0.08} /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden transform transition duration-500 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              width={600}
              height={400}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
              
            </div>
          </div>
        ))}
      </div>
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projetos;
