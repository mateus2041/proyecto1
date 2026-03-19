import { useState } from 'react';
import { Item } from './types';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

/**
 * COMPONENTE PRINCIPAL: App
 *
 * Este componente gestiona el estado global de la aplicación
 * y coordina la comunicación entre componentes hijos.
 */
const App: React.FC = () => {
  // ============================================
  // ESTADO PRINCIPAL
  // ============================================

  const [items, setItems] = useState<Item[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  // ============================================
  // FUNCIONES CRUD
  // ============================================

  const addItem = (item: Omit<Item, 'id'>): void => {
    const newItem: Item = {
      ...item,
      id: Date.now(),
    };

    setItems([...items, newItem]);
  };

  const updateItem = (id: number, updates: Partial<Item>): void => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const deleteItem = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEdit = (id: number): void => {
    setEditingId(id);
  };

  const cancelEdit = (): void => {
    setEditingId(null);
  };

  // ============================================
  // ELEMENTO SIENDO EDITADO
  // ============================================

  const itemToEdit = editingId
    ? items.find((item) => item.id === editingId)
    : undefined;

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="app">
      <Header />

      <div className="container">
        <ItemForm
          onAdd={addItem}
          onUpdate={updateItem}
          editingItem={itemToEdit}
          onCancelEdit={cancelEdit}
        />

        <ItemList
          items={items}
          onDelete={deleteItem}
          onEdit={startEdit}
        />
      </div>
    </div>
  );
};

export default App;
