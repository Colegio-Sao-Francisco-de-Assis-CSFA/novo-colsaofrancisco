import axios from "axios";

const PORT = process.env.BACKEND_URL || 8800;

const api = axios.create({
  baseURL: `http://localhost:${PORT}` // URL do seu back-end
});

export default api;