# Task Manager

## Table des Matières
1. [Introduction](#introduction)
2. [Fonctionnalités](#fonctionnalités)
3. [Installation](#installation)
4. [Utilisation](#utilisation)

---

## Introduction

Ce projet est une application de liste de tâches simple construite avec React et Chakra UI. Elle permet aux utilisateurs de gérer des tâches et sous-tâches avec des opérations CRUD, de réorganiser et prioriser les tâches. 
Les utilisateurs pourront également téléhcarger leurs liste de tâches ou en uploader.

---

## Fonctionnalités
Liste les principales fonctionnalités de l'application :

- Créer, éditer et supprimer des tâches
- Ajouter des sous-tâches (sans limite de profondeur)
- Marquer les tâches comme complétées ou non
- Réorganiser les tâches et sous-tâches
- Empêcher la complétion des tâches parent tant que toutes les sous-tâches ne sont pas terminées
- Exporter et importer les tâches en fichier JSON

---

## Installation

### Étapes
1. Cloner le dépôt :
   
   git clone https://github.com/Jeandevweb/test-tech-araiko.git



2. Installer les dépendances :

   npm install


3. Lancer le serveur de développement :

   npm run dev

---

## Utilisation

### Ajouter des Tâches
1. Tapez le nom d'une tâche dans le champ de saisie.
2. Cliquez sur "Ajouter une tâche" pour en créer une nouvelle.
3. Vous pouvez réorganiser, supprimer ou éditer les tâches via le menu d'actions situé à droite des tâches.

### Gestion des Sous-Tâches
1. Utilisez l'option "Ajouter une sous-tâche" dans le menu d'actions d'une tâche pour en créer.
2. Les sous-tâches sont gérées de la même manière que les tâches (édition, suppression, complétion).

### Exporter les Tâches
- Cliquez sur le bouton "Exporter en JSON" pour télécharger toutes les tâches sous forme de fichier JSON.

### Importer des Tâches
- Cliquez sur "Importer JSON" pour charger des tâches depuis un fichier JSON.

---
