import React, { useState } from "react";
import EmployeeFormData from "../../models/EmployeeFormData";
import { Save, X } from "lucide-react";

function Cadastro() {
  const [formData, setFormData] = useState<EmployeeFormData>({
    nome: "",
    cargo: "",
    dataAdmissao: "",
    salario: "",
    departamento: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Funcionario cadastrado");
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      nome: "",
      cargo: "",
      dataAdmissao: "",
      salario: "",
      departamento: "",
    });
  };
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 f">
            <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">
              Cadastro de Funcionário
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cargo
                </label>
                <input
                  type="text"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Departamento
                  </label>
                  <select
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="TI">TI</option>
                    <option value="RH">RH</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Operações">Operações</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Admissão
                  </label>
                  <input
                    type="date"
                    name="dataAdmissao"
                    value={formData.dataAdmissao}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salário
                  </label>
                  <input
                    type="number"
                    name="salario"
                    value={formData.salario}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <X className="h-5 w-5 mr-2" />
                  Limpar
                </button>
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cadastro;
