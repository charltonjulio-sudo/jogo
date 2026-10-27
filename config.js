// Configuração opcional da Dungeon do Python II (v0.2.0-alpha).
// Fica na mesma pasta do index.html. Se este arquivo não existir, o jogo usa os padrões.
// Para trocar a palavra-passe: Área do Professor > Ferramentas > "Trocar a palavra-passe" gera o senhaHash.
window.DUNGEON_CONFIG = {
  // SHA-256 da palavra-passe normalizada. A frase em si nunca fica escrita nos arquivos publicados.
  senhaHash: 'e44d0e597eed78e77e45858bec48e2620d12c349363d28d65b64f175677bfad6',
  // Link do Google Forms (opcional). Pode usar {nome} {numero} {escola} {turma} {codigo} {nota} num link pré-preenchido.
  formsUrl: '',
  // Colégios e turmas. A sigla aparece no placar; mudar sigla ou turma de quem já joga invalida o código dele.
  escolas: [
    { sigla: 'IEEL', nome: 'Instituto de Educação Estadual de Londrina',
      turmas: ['1º ADM - Turma A', '1º ADM - Turma B', '1º ADM - Turma C', '1º ADM - Turma D', '1º Ano Formação de Docentes - Turma A'] },
    { sigla: 'Adélia', nome: 'Colégio Estadual Cívico-Militar Professora Adélia Dionísia Barbosa',
      turmas: ['1º ADM - Turma A', '1º ADM - Turma B', '1º ADM - Turma C', '1º ADM - Turma D'] },
  ],
};
