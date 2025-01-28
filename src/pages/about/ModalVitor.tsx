import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Github, Linkedin } from "lucide-react";

function ModalPostagem() {
  return (
    <>
      <style>
        {`
                    .popup-content {
                        border-radius: 0.5rem !important;
                        padding: 0 !important;
                        border: none !important;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
                        width: 24rem !important;
                    }

                    .popup-overlay {
                        background: rgba(0, 0, 0, 0.5) !important;
                    }
                `}
      </style>
      <Popup
        trigger={
          <img
            src="https://i.imgur.com/KptY0W0.png"
            alt="Team Member"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-purple-200 cursor-pointer hover:ring-purple-300 transition-all"
          />
        }
        modal
      >
        <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-xl">
          <div className="flex flex-col items-center">
            <img
              src="https://i.imgur.com/KptY0W0.png"
              alt="Team Member"
              className="w-32 h-32 rounded-full mb-6 object-cover ring-4 ring-purple-200"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Vitor Cavalcante
            </h2>
            <p className="text-purple-600 font-medium mb-4">
              Full Stack Developer
            </p>

            <p className="text-gray-600 text-center mb-6 text-sm">
              Desenvolvedor full stack com 5 anos de experiencia e especializado
              em Java, Spring, MySql e AWS, sempre contribuindo com ideias e
              soluções em técnologias.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Vitor-C-Souza"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/vitorcavalcantesouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
