import { useState, useEffect } from "react";
import { Item } from "../types";

/**
 * PROPS: ItemForm
 */
interface ItemFormProps {
  onAdd: (item: Omit<Item, "id">) => void;
  onUpdate: (id: number, updates: Partial<Item>) => void;
  editingItem?: Item;
  onCancelEdit: () => void;
}

/**
 * COMPONENTE: ItemForm
 * Formulario para agregar o editar cuentas bancarias
 */
const ItemForm: React.FC<ItemFormProps> = ({
  onAdd,
  onUpdate,
  editingItem,
  onCancelEdit,
}) => {

  // ============================================
  // ESTADO DEL FORMULARIO
  // ============================================

  const initialState = {
    name: "",
    accountNumber: "",
    accountType: "Ahorros",
    balance: 0,
    active: true,
  };

  const [formData, setFormData] = useState(initialState);

  // ============================================
  // EFECTO: PRE-LLENAR FORMULARIO AL EDITAR
  // ============================================

  useEffect(() => {
    if (editingItem) {
      const { id, ...rest } = editingItem;
      setFormData(rest);
    } else {
      setFormData(initialState);
    }
  }, [editingItem]);

  // ============================================
  // HANDLERS
  // ============================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "balance" ? Number(value) : value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  // ============================================
  // VALIDACIÓN
  // ============================================

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      alert("El nombre del cliente es requerido");
      return false;
    }

    if (!formData.accountNumber.trim()) {
      alert("El número de cuenta es requerido");
      return false;
    }

    if (formData.balance < 0) {
      alert("El saldo no puede ser negativo");
      return false;
    }

    return true;
  };

  // ============================================
  // SUBMIT
  // ============================================

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingItem) {
      onUpdate(editingItem.id, formData);
      onCancelEdit();
    } else {
      onAdd(formData);
    }

    setFormData(initialState);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="form-container">
      <h2>{editingItem ? "✏️ Editar Cuenta" : "➕ Agregar Cuenta"}</h2>

      <form onSubmit={handleSubmit} className="item-form">

        {/* Nombre del cliente */}
        <div className="form-group">
          <label>Nombre del Cliente *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Número de cuenta */}
        <div className="form-group">
          <label>Número de Cuenta *</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Tipo de cuenta */}
        <div className="form-group">
          <label>Tipo de Cuenta</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleSelectChange}
          >
            <option value="Ahorros">Ahorros</option>
            <option value="Corriente">Corriente</option>
          </select>
        </div>

        {/* Saldo */}
        <div className="form-group">
          <label>Saldo</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>

        {/* Estado */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleCheckboxChange}
            />
            Cuenta activa
          </label>
        </div>

        {/* Botones */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingItem ? "Actualizar" : "Agregar"}
          </button>

          {editingItem && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onCancelEdit();
                setFormData(initialState);
              }}
            >
              Cancelar
            </button>
          )}
        </div>

      </form>
    </div>
  );
};

export default ItemForm;;
