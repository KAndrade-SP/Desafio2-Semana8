import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className='flex justify-center flex-wrap'>
      <div className='gap-5 pb-10 object-contain md:object-scale max-w-l max-h-l rounded overflow-hidden'>
        <img className='' src="/src/assets/images/compassBanner-01.png" alt="Banner Compass Desafio2" />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-center leading-9 text-gray-800 pb-4">Our Challenge</h1>
                <p className="font-normal text-base text-center leading-6 text-gray-600">
                  Recreate the E-Commerce website "plantPeace", utilizing all our potencial as a team 
                  to allocate our resources equally. In rebuilding this from scratch we were tasked to use Typescrypt, Clerk and other technologies.
                </p>
            </div>
        </div>
      </div>
      <div className='flex justify-center gap-10 py-10 flex-wrap'>
        <h1 className="text-3xl lg:text-4xl font-bold text-center leading-9 text-gray-800 pb-4">Meet the Team</h1>
      </div>
      <div className='flex justify-center gap-10 py-2 flex-wrap'>  
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
          <img className="object-cover h-96 w-96" src="/src/assets/images/Brenda g.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Brenda Gaudêncio</div> 
            <p className="text-gray-700 text-base">
            A student of Systems Analysis and Development and starting a career in front-end development, although she also explores back-end and data areas in her college subjects. Her journey in technology learning began with a technical course in Computer Graphics, completed in 2021. Since then, her passion for technology has been growing exponentially.
            </p>
            <div className="mt-2 pt-2 flex flex-row">
                <div>
                  <a href="https://www.linkedin.com/in/brendagaudencio/" target='_blank'>
                    <FaLinkedin className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaLinkedin>
                  </a>
                </div>
                <div> 
                  <a href="https://github.com/brendagaudencio" target='_blank'>
                    <FaGithubSquare  className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaGithubSquare>
                  </a>
                </div> 
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
          <img className="object-cover h-96 w-96" src="/src/assets/images/Bruno g.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bruno Noronha</div>
            <p className="text-gray-700 text-base">
              Studying Systems Analysis and Developmen and with a degree in Design and Visual Communication, he strives to understand not only technology but it´s users. Would like to build an application to catter to people with disabilities and the ones who normally have a hard time with technology.
            </p>
            <div className="mt-2 pt-2 flex flex-row">
                <div>
                  <a href="https://www.linkedin.com/in/bgabrielnv/" target='_blank'>
                    <FaLinkedin className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaLinkedin>
                  </a>
                </div>
                <div> 
                  <a href="https://github.com/chaosofmind" target='_blank'>
                    <FaGithubSquare  className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaGithubSquare>
                  </a>
                </div> 
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
          <img className="object-cover h-96 w-96" src="/src/assets/images/kaique.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kaique Andrade</div>
            <p className="text-gray-700 text-base">
            Considers himself a dedicated person who strives to efficiently solve problems or fulfill requests, whether working alone or coordinating a team. Likes to stay up-to-date with new technologies to maintain a good understanding of what the market currently demands from a professional. Seeking always to put into practice the knowledge acquired over time, continuously aiming to evolve and become more skilled in the field.
            </p>
            <div className="mt-2 pt-2 flex flex-row">
                <div>
                  <a href="https://www.linkedin.com/in/kaique-andrade-silva-viana-338675228/" target='_blank'>
                    <FaLinkedin className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaLinkedin>
                  </a>
                </div>
                <div> 
                  <a href="https://github.com/KAndrade-SP" target='_blank'>
                    <FaGithubSquare  className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaGithubSquare>
                  </a>
                </div> 
            </div>
          </div>
        </div>
        <div className="max-w-sm max-h-sm rounded overflow-hidden shadow-lg mx-4">
          <img className="object-cover h-96 w-96" src="/src/assets/images/lidia.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lidia Messias</div>
            <p className="text-gray-700 text-base">
              Currently in the 3rd semester of the Internet Systems program at Fatec Rubens Lara in Baixada Santista. She also holds a degree in Industrial Design and has professional experience in the commercial field, working to improve sales processes and customer relationship management. She is transitioning her career, seeking a position in the job market as a Front-End Developer. Additional education: Systems Development Technician – ETEC of Praia Grande. Certifications: Microsoft Certified: Azure Fundamentals.
            </p>
            <div className="mt-2 pt-2 flex flex-row">
                <div>
                  <a href="https://www.linkedin.com/in/lidiamessias/" target='_blank'>
                    <FaLinkedin className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaLinkedin>
                  </a>
                </div>
                <div> 
                  <a href="https://github.com/LidiaMessias" target='_blank'>
                    <FaGithubSquare  className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaGithubSquare>
                  </a>
                </div> 
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
          <img className="object-cover h-96 w-96" src="/src/assets/images/yan.jpeg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Yan Augusto</div>
            <p className="text-gray-700 text-base">
            A Systems Analysis and Development student living in Jales, São Paulo. He is a scholarship participant at Compass UOL and is starting his career in front-end development while also exploring back-end and database areas in college. His interest in technology began in 2021 at Fatec Jales and has been expanding ever since.
            </p>
            <div className="mt-2 pt-2 flex flex-row">
                <div>
                  <a href="https://www.linkedin.com/in/yan-augusto-estricanh%C3%B3li-de-souza-oliveira-64aa5a254/" target='_blank'>
                    <FaLinkedin className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaLinkedin>
                  </a>
                </div>
                <div> 
                  <a href="https://github.com/YAN-AES" target='_blank'>
                    <FaGithubSquare  className='text-primary-lunar-green size-8 hover:text-primary-avocado transition-all'></FaGithubSquare>
                  </a>
                </div> 
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}
export default AboutUsPage