"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
// Caminho para a pasta de rotas
const routesPath = __dirname;
console.log('Carregando rotas...');
// Função para carregar as rotas automaticamente
(0, fs_1.readdirSync)(routesPath).forEach((file) => {
    // Ignorar o próprio arquivo index.ts e arquivos não .ts ou .js
    if (file.endsWith('.routes.ts') || file.endsWith('.routes.js')) {
        const route = require(path_1.default.join(routesPath, file)).default; // Importa a rota
        router.use(route); // Usa a rota
        console.log(`${file} carregada com sucesso!`);
    }
});
exports.default = router;
