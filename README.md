# 📝 Task Manager - Application de gestion de tâches

## 🚀 Présentation du projet
Ce projet est une application web full-stack permettant de gérer une liste de tâches.  
Les fonctionnalités incluent :  
✅ Ajout d'une tâche  
✅ Suppression d'une tâche  
✅ Marquage comme "terminée" ou "à faire"  
✅ Validation des champs via un schéma Zod  
✅ Stockage et manipulation des données côté backend via une API REST en Express.js  

**FONCTIONNALITES**

    Le frontend est développé en **React + TypeScript**, et le backend en **Node.js + Express + TypeScript**.

---

## 🛠️ Prérequis

        - Node.js et npm doivent être installés sur votre machine.  
        ➤ [Installer Node.js](https://nodejs.org/)  
        ➤ Si `npm` n'est pas reconnu : vérifiez qu’il est bien installé ou que le chemin (`PATH`) de node est bien configuré.

---

## 📦 Installation & Lancement du projet

### 1. Ouvrir deux terminaux

        l'un sera pour le frontend et l'autre pour le backend.

---

### 2. Se déplacer dans les dossiers du projet

#### ✅ Terminal 1 - Backend :

        ```bash
            cd chemin/vers/le/projet/backend
        ```

#### ✅ Terminal 2 - Backend :

        ```bash
            cd chemin/vers/le/projet/backend
        ```

Remplacez **chemin/vers/le/projet/** par l’emplacement réel du dossier sur votre machine.

### 3. installer les dépendance
        Dans les deux terminaux, exécuter :

            ```bash
                npm install
            ```

### 4. Démarrer les serveurs
    Dans le terminal frontend :

    ```bash
            npm start
    ```
    (1) Dans le terminal backend :

    ```bash
            npm run dev
    ```
   Si une erreur indique que **nodemon est introuvable**, installez-le avec :

    ```bash
            npm install nodemon
    ```
    Ensuite réexécuter (1)

### 5. Accéder à l'application

    Si celà n'est pas fait automatiquemnt après le démarrage du serveur frontend :
        Ouvrez un navigateur à l'adresse suivante :
   # 🌐 http://localhost:3000
        Cette page devrait afficher l'interface de gestion des tâches.

# 💡CHOIX TECHNIQUES ET COMMENTAIRES

J’ai choisi Node.js/expressjs pour le backend car c’est le langage backend que j’utilise le plus souvent, avec Symfony. Son écosystème riche, sa rapidité, et sa simplicité pour créer des APIs REST en font une excellente base pour ce genre de projet.

Pour le frontend, j’ai pris le temps de découvrir et me former sur plusieurs outils modernes pour rendre l’application plus robuste et maintenable :

React Hook Form : pour gérer les formulaires de manière simple et efficace.

Zod : pour valider les données côté frontend en respectant un schéma strict.

TanStack Query (anciennement React Query) : pour gérer les appels API, la mise en cache, et le rechargement automatique des données, tout en offrant une expérience utilisateur fluide.

Le projet est structuré pour favoriser la réutilisabilité des composants, la séparation claire des responsabilités (hooks, composants, services), et pour faciliter la maintenance.

Enfin, ce projet m’a permis de mettre en pratique mes compétences en full-stack, de découvrir et d’approfondir l’utilisation d’outils professionnels que l’on retrouve dans des contextes d’entreprise.

