import { Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

const router = Router();

// Caminho para a pasta de rotas
const routesPath = __dirname;

console.log('Carregando rotas...');

// Função para carregar as rotas automaticamente
readdirSync(routesPath).forEach((file) => {
  // Ignorar o próprio arquivo index.ts e arquivos não .ts ou .js
  if (file.endsWith('.routes.ts') || file.endsWith('.routes.js')) {
    const route = require(path.join(routesPath, file)).default; // Importa a rota
    router.use(route); // Usa a rota
    console.log(`${file} carregada com sucesso!`);
  }
});

export default router;
