/**
 * COMPONENTE: Header
 * 
 * Muestra el título y descripción del sistema bancario.
 */

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      
      {/* Título del sistema */}
      <h1>🏦 Sistema de Gestión Bancaria</h1>

      {/* Descripción del sistema */}
      <p>Gestiona clientes, cuentas bancarias, transacciones y préstamos</p>

    </header>
  );
};

// export default Header;
