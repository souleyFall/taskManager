import express from "express";
import router from "./routes/TaskRoute";
import cors from "cors";

// Création de l'application Express
const app = express();

// Activation de CORS (Cross-Origin Resource Sharing)
// Permet au serveur client de faire des appels à l'API sans bloquage du navigateur
app.use(cors());

// Middleware pour parser automatiquement le JSON dans les requêtes entrantes
app.use(express.json());

//Toutes les routes sont accessibles depuis la racine "/"
app.use("/api", router);

// Lancement du serveur sur un port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
