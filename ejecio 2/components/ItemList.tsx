import React from "react";
import { Item } from "../types";
import ItemCard from "./ItemCard";

/**
 * PROPS: ItemList
 */
interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

/**
 * COMPONENTE: ItemList
 * Renderiza la lista de cuentas bancarias
 */
const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {

  // ============================================
  // ESTADO VACÍO
  // ============================================

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>🏦 No hay cuentas registradas</p>
        <p className="empty-state__hint">
          Agrega una nueva cuenta bancaria usando el formulario
        </p>
      </div>
    );
  }

  // ============================================
  // RENDER: LISTA DE CUENTAS
  // ============================================

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ItemList;
