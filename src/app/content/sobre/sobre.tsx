import React from 'react';
import FotoKathellyn from '../../../../public/images/Foto-Kathellyn.png';
import { FaDownload } from 'react-icons/fa';
import TypingAnimation from '../../components/animation/typingAnimation/typeAnimation';

export default function Sobre() {
  return (
    <section id='sobre' style={{ minHeight: '100vh' }} className="py-12 px-4 md:px-0 flex justify-center items-center">
      <div className="flex flex-col-reverse items-center justify-center gap-8 sm:flex-row">
        <div className="relative w-full max-w-md rounded-full overflow-hidden sm:w-80 sm:h-80 sm:mr-8 order-2 sm:order-1">
          <img
            src={FotoKathellyn.src}
            alt="Profile Picture"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:grayscale transition-all duration-300"
          />
        </div>
        <div className="text-center sm:text-left order-1 sm:order-2">
           <div style={{ userSelect: 'none' }}><TypingAnimation text="Kathellyn Caroline" duration={100} /></div>
          <p className="text-gray-400 mt-4 max-w-md">
            Olá! Sou Kathellyn Caroline, desenvolvedora de software com alma analítica e mente inquieta.
            Iniciei minha trajetória como desenvolvedora full stack, com foco especial em backend, onde aprendi a importância de estruturar
           soluções robustas e eficientes. Com o tempo, descobri minha verdadeira paixão: dados e inteligência artificial.Hoje atuo como 
           Cientista de Dados na 7COMM, onde uso tecnologia para gerar insights, automatizar processos e criar soluções que realmente fazem a diferença. 
           Sou formada em Análise e Desenvolvimento de Sistemas e atualmente curso Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos,
           sempre em busca de novas formas de evoluir como profissional.


          </p>
          <span className="block text-gray-400 text-lg font-normal mt-2">Software Developer Fullstack </span>
          <div className="mt-6">
          </div>
        </div>
      </div>
    </section>
  );
}
