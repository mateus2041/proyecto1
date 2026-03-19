# 📌 Proyecto 2 — Sistema de Gestión Bancaria (React + TypeScript)

## 🎯 Objetivo

Desarrollar una aplicación web usando **React + TypeScript** que permita gestionar información básica de un **sistema bancario**, aplicando conceptos de **componentes, interfaces, estado y CRUD**.

---

# 🏦 Sistema de Gestión Bancaria

Esta aplicación permite administrar **cuentas bancarias de clientes**, permitiendo:

* Crear nuevas cuentas
* Editar cuentas existentes
* Eliminar cuentas
* Visualizar la lista de cuentas registradas

---

# 🧩 Tecnologías utilizadas

* React
* TypeScript
* Vite
* CSS
* HTML

---

# 📂 Estructura del Proyecto

```
src
 ├── components
 │    ├── Header.tsx
 │    ├── ItemForm.tsx
 │    ├── ItemList.tsx
 │    └── ItemCard.tsx
 │
 ├── styles
 │    └── App.css
 │
 ├── types.ts
 ├── App.tsx
 └── main.tsx
```

---

# 📊 Modelo de Datos

Se define una **interface principal** llamada `Item` que representa una **cuenta bancaria**.

```ts
export interface Item {
  id: number;
  name: string;
  accountNumber: string;
  accountType: 'ahorros' | 'corriente';
  balance: number;
  active: boolean;
}
```

### Descripción de campos

| Campo         | Descripción         |
| ------------- | ------------------- |
| id            | Identificador único |
| name          | Nombre del cliente  |
| accountNumber | Número de cuenta    |
| accountType   | Tipo de cuenta      |
| balance       | Saldo disponible    |
| active        | Estado de la cuenta |

---

# 🧱 Componentes del Proyecto

## 1️⃣ Header

Muestra el **título y descripción del sistema bancario**.

Funciones:

* Identificar la aplicación
* Dar contexto al usuario

---

## 2️⃣ ItemForm

Formulario para:

* Crear cuentas nuevas
* Editar cuentas existentes

Campos del formulario:

* Nombre del cliente
* Número de cuenta
* Tipo de cuenta
* Saldo
* Estado de la cuenta

---

## 3️⃣ ItemList

Renderiza la **lista de cuentas bancarias** utilizando `.map()`.

Responsabilidades:

* Mostrar todas las cuentas
* Mostrar mensaje si no hay cuentas registradas

---

## 4️⃣ ItemCard

Representa **cada cuenta bancaria individual**.

Muestra:

* Nombre del cliente
* Número de cuenta
* Tipo de cuenta
* Saldo
* Estado

Incluye botones para:

* Editar
* Eliminar

---

# ⚙️ Funcionalidades CRUD

La aplicación implementa las operaciones básicas:

### ➕ Crear

Agregar nuevas cuentas mediante el formulario.

### 📖 Leer

Mostrar la lista de cuentas registradas.

### ✏️ Actualizar

Editar la información de una cuenta existente.

### 🗑️ Eliminar

Eliminar cuentas de la lista.

---

# 🧠 Manejo de Estado

Se utilizan **hooks de React**:

### useState

Para gestionar:

* Lista de cuentas
* ID del elemento en edición

Ejemplo:

```ts
const [items, setItems] = useState<Item[]>([]);
const [editingId, setEditingId] = useState<number | null>(null);
```

---

# 🔄 Flujo de la Aplicación

1. El usuario ingresa datos en el formulario
2. Se agrega una nueva cuenta al estado global
3. La lista se actualiza automáticamente
4. El usuario puede editar o eliminar cuentas

---

# 🖥️ Ejecución del Proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Abrir en navegador:

```
http://localhost:5173
```

---

# ✅ Resultados Esperados

La aplicación debe permitir:

✔ Registrar cuentas bancarias
✔ Editar información
✔ Eliminar cuentas
✔ Visualizar cuentas registradas

---

# 👨‍💻 Autor

Proyecto desarrollado para práctica de:

**React + TypeScript**

---
