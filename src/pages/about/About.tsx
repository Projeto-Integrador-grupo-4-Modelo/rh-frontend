import { Target, Heart, Award } from "lucide-react";

import ModalBianca from "./ModalBianca";
import ModalKemilly from "./ModalKemilly";
import ModalPriscila from "./ModalPriscila";
import ModalBruna from "./ModalBruna";
import ModalVitor from "./ModalVitor";
import ModalRubio from "./ModalRubio";
import ModalGuilherme from "./ModalGuilherme";
import ModalVictoria from "./ModalVictoria";

function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em transformar a gestão de recursos humanos
              através de tecnologia e inovação
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Missão</h3>
              <p className="text-gray-600">
                Simplificar e humanizar a gestão de pessoas através de soluções
                tecnológicas inovadoras
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Valores</h3>
              <p className="text-gray-600">
                Inovação, transparência, excelência e foco no cliente são os
                pilares que nos guiam
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser referência em soluções de RH, impactando positivamente
                organizações em todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ModalBianca />

              <h3 className="text-xl font-semibold">Bianca Jesus</h3>
              <p className="text-gray-600">Product Owner</p>
            </div>
            <div className="text-center">
              <ModalKemilly />
              <h3 className="text-xl font-semibold">Kemilly Fagundes</h3>
              <p className="text-gray-600">Tester</p>
            </div>
            <div className="text-center">
              <ModalPriscila />
              <h3 className="text-xl font-semibold">Priscila Santos</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="text-center">
              <ModalBruna />
              <h3 className="text-xl font-semibold">Bruna Bosco</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="text-center">
              <ModalVitor />
              <h3 className="text-xl font-semibold">Vitor Cavalcante</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="text-center">
              <ModalRubio />
              <h3 className="text-xl font-semibold">Rubio Dainton</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="text-center">
              <ModalGuilherme />
              <h3 className="text-xl font-semibold">Guilherme Lima</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="text-center">
              <ModalVictoria />
              <h3 className="text-xl font-semibold">Victória Lara</h3>
              <p className="text-gray-600">Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
