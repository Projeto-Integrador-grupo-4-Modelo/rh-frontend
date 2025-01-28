import { ArrowRight, BarChart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme a Gestão de RH da sua Empresa
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Simplifique processos e cuide melhor do seu time
            </p>
            <Link
              to="/produto"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Conheça nossa solução
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossa solução?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Gestão</h3>
              <p className="text-gray-600">
                Controle de cadastro de funcionario, salário, acompanhar tempo
                de empresa.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Segurança</h3>
              <p className="text-gray-600">
                Dados protegidos e em conformidade com a LGPD.
              </p>
            </div>
            <div className="text-center p-6">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-600">
                Em breve: relatórios detalhados sobre funcionários e
                departamentos, oferecendo insights para melhores decisões
                estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para começar?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Agende uma demonstração gratuita e descubra como podemos ajudar sua
            empresa
          </p>
          <Link
            to="/produto"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            <button>Agendar Demo</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Home;
