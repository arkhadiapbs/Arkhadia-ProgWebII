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
