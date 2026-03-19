import React from "react";
import { Item } from "../types";

/**
 * PROPS: ItemCard
 */
interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

/**
 * COMPONENTE: ItemCard
 * Tarjeta para mostrar información de una cuenta o cliente del banco
 */
const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onEdit }) => {

  // ============================================
  // HANDLER: CONFIRMAR ELIMINACIÓN
  // ============================================
  const handleDelete = () => {
    if (window.confirm(`¿Eliminar a ${item.name}?`)) {
      onDelete(item.id);
    }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="item-card">

      {/* Información principal */}
      <div className="item-card__header">
        <h3 className="item-card__title">{item.name}</h3>

        {/* Estado de la cuenta */}
        <span className={`badge badge--${item.active ? "success" : "secondary"}`}>
          {item.active ? "Cuenta Activa" : "Cuenta Inactiva"}
        </span>
      </div>

      {/* Información detallada */}
      <div className="item-card__body">
        <p><strong>Número de cuenta:</strong> {item.accountNumber}</p>
        <p><strong>Tipo de cuenta:</strong> {item.accountType}</p>
        <p><strong>Saldo:</strong> ${item.balance}</p>
      </div>

      {/* Acciones */}
      <div className="item-card__actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(item.id)}
          aria-label={`Editar ${item.name}`}
        >
          ✏️ Editar
        </button>

        <button
          className="btn btn-delete"
          onClick={handleDelete}
          aria-label={`Eliminar ${item.name}`}
        >
          🗑️ Eliminar
        </button>
      </div>

    </div>
  );
};

export default ItemCard;;
