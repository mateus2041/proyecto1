// ============================================
// TYPES: INTERFACES Y TIPOS
// ============================================
// Define aquí las interfaces para tu dominio

/**
 * NOTA PARA EL APRENDIZ:
 * Adapta esta interface a tu dominio asignado.
 *
 * Ejemplos:
 * - Biblioteca: Book { id, title, author, isbn, available, category }
 * - Farmacia: Medicine { id, name, price, stock, requiresPrescription, category }
 * - Gimnasio: Member { id, name, email, plan, startDate, active }
 * - Restaurante: Dish { id, name, category, price, available, description }
 */

// TODO: Define la interface principal de tu dominio
export interface Item {
  id: number;
  name: string;

  // Propiedades del sistema bancario
  accountNumber: string;
  accountType: 'ahorros' | 'corriente';
  balance: number;
  active: boolean;
}

// TODO: Si necesitas tipos adicionales, defínelos aquí
export type AccountType = 'ahorros' | 'corriente';

// TODO: Interface para props de formulario (opcional)
export interface FormData {
  // Mismos campos que Item pero sin el id
  name: string;
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  active: boolean;
}
