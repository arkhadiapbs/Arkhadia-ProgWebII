# 🎮 Arkhadia

Plataforma web voltada para a comunidade gamer, com foco em jogos, interação entre usuários e autenticação.

Projeto desenvolvido para a disciplina de **Programação Web II**.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend
- React
- React Router DOM
- CSS
- React Icons

### 🧠 Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt

---

## ✨ Funcionalidades

- 🔐 Sistema de autenticação (Login e Cadastro)
- 👥 Comunidade gamer
- 🎮 Listagem e filtro de jogos
- 👤 Controle de sessão (Login / Sair)
- 🎨 Interface responsiva com tema escuro

---

## 📁 Estrutura do Projeto

```bash
📦 site
├── 📂 backend
│   ├── 📂 models
│   ├── 📂 routes
│   ├── 📄 server.js
│   └── 📄 .env
│
├── 📂 frontend
│   ├── 📂 public
│   ├── 📂 src
│   │   ├── 📂 assets
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── 📂 services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.jsx
│   │   ├── index.css
│   │   └── styles.css
└───── 
````

## ⚙️ Como Rodar o Projeto

⚠️ **Atenção:** o backend deve estar rodando **antes** do frontend.

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/arkhadiapbs/site.git
cd site
```

---

### 2️⃣ Iniciar o Backend (API)

> Certifique-se de que o MongoDB esteja rodando localmente.

```bash
cd backend
npm install
npm run dev
```

A API será executada em:

```text
http://localhost:5000
```

---

### 3️⃣ Iniciar o Frontend

Abra **outro terminal** e execute:

```bash
cd frontend
npm install
npm start
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

## 🔑 Rotas da API

```http
POST /api/auth/register
POST /api/auth/login
```

---

## 🧠 Observações

- A autenticação é controlada via `localStorage`
- Algumas páginas exigem que o usuário esteja logado
- Projeto desenvolvido para fins acadêmicos

---
