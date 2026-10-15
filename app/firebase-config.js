// ============================================================
// Configuração do Firebase — Solari para MEI (login de clientes)
// ============================================================
// Este arquivo é compartilhado pelo app (mei-solari-tech.html) e
// pelo painel administrativo (admin.html).
//
// COMO PREENCHER:
// 1. Crie um projeto em https://console.firebase.google.com
// 2. No menu lateral, ative "Authentication" → método "E-mail/senha".
// 3. Crie um "Firestore Database" (modo produção, região ex: southamerica-east1).
// 4. Em "⚙ Configurações do projeto" → aba "Geral" → "Seus apps" →
//    clique no ícone "</>" (Web) para registrar um app web.
// 5. Copie os valores que o Firebase mostrar (firebaseConfig) para
//    dentro do objeto abaixo, substituindo os textos "SUBSTITUA_AQUI...".
//
// IMPORTANTE: esses valores NÃO são segredos — foram feitos para
// ficar no código do navegador (qualquer site Firebase os expõe).
// Quem realmente protege os dados são as REGRAS DE SEGURANÇA do
// Firestore (arquivo "firestore-rules.txt" que a Solari te enviou
// junto com este), que só deixam o próprio cliente ler os dados dele
// e só deixam um admin criar/editar cadastros de clientes.
//
// Enquanto os valores abaixo estiverem com "SUBSTITUA_AQUI", o site
// continua funcionando exatamente como hoje — sem pedir login — para
// não travar ninguém por engano enquanto o Firebase não é configurado.

const FIREBASE_CONFIG = {
  apiKey: "SUBSTITUA_AQUI_API_KEY",
  authDomain: "SUBSTITUA_AQUI.firebaseapp.com",
  projectId: "SUBSTITUA_AQUI",
  storageBucket: "SUBSTITUA_AQUI.firebasestorage.app",
  messagingSenderId: "SUBSTITUA_AQUI",
  appId: "SUBSTITUA_AQUI"
};
