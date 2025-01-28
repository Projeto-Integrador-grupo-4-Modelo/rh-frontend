import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbBrandOffice } from "react-icons/tb";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-purple-600"
      : "text-gray-600 hover:text-purple-600";
  };

  return (
    <nav className="bg-white shadow-sm drop-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <TbBrandOffice className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Conecta RH
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive(
                "/"
              )} transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className={`${isActive(
                "/sobre"
              )} transition-colors duration-200 font-medium`}
            >
              Sobre Nós
            </Link>
            <Link
              to="/produto"
              className={`${isActive(
                "/produto"
              )} transition-colors duration-200 font-medium`}
            >
              Produto
            </Link>
            <Link
              to="/cadastro-funcionario"
              className={`${isActive(
                "/cadastro-funcionario"
              )} transition-colors duration-200 font-medium`}
            >
              Cadastro
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/produto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Produto
            </Link>
            <Link
              to="/cadastro-funcionario"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Cadastro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
