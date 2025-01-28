import React from "react";
import { CheckCircle, Clock, Users, Database } from "lucide-react";

const Product = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sistema Completo de Gestão de RH
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Uma solução integrada para todas as necessidades do seu
                departamento de Recursos Humanos
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Funcionalidades Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg hover:border-purple-600 transition-colors">
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Gestão de Funcionários
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Cadastro completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Documentação digital
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Histórico profissional
                  </li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg hover:border-purple-600 transition-colors">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Ponto e Frequência
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Registro online
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Banco de horas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Escalas de trabalho
                  </li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg hover:border-purple-600 transition-colors">
                <Database className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Folha de Pagamento (Em breve)
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Cálculos automáticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Integração bancária
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Relatórios fiscais
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Planos e Preços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border hover:border-purple-200 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Básico</h3>
                <p className="text-3xl font-bold mb-6">
                  R$ 199<span className="text-lg text-gray-600">/mês</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Até 50 funcionários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Suporte por email
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Funcionalidades essenciais
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                  Começar Agora
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-600 transform scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Profissional</h3>
                <p className="text-3xl font-bold mb-6">
                  R$ 399<span className="text-lg text-gray-600">/mês</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Até 200 funcionários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Suporte prioritário
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Todas as funcionalidades
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                  Começar Agora
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border hover:border-blue-200 transition-colors">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-6">Sob consulta</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Funcionários ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Suporte 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Personalização completa
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                  Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient-to-r from-purple-400 to-blue-600 text-white py-20 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empresas Parceiras</h2>
            <p className="text-lg mb-8">
              Empresas que confiam no nosso trabalho
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="./c6-bank.png"
                alt="Logo c6 bank"
                className="h-20 mb-4"
              />
              <span className="text-xl font-semibold text-white"></span>
            </div>

            <div className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png"
                alt="Logo SAP"
                className="h-16 mb-4"
              />
              <span className="text-xl font-semibold text-white"></span>
            </div>

            <div className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Logo MSC"
                className="h-16 mb-4"
              />
              <span className="text-xl font-semibold text-white"></span>
            </div>

            <div className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/MSC_Cruises_Logo.png"
                alt="Logo Google"
                className="h-16 mb-4"
              />
              <span className="text-xl font-semibold text-white"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
