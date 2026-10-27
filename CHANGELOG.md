# Changelog: Dungeon do Python II (Blocos do Destino)

Versões no formato `MAJOR.MINOR.PATCH`, com sufixo `-alpha` ou `-beta` enquanto o jogo estiver em teste.

| Parte | Quando muda | Exemplo |
|---|---|---|
| MAJOR | Os saves e PNGs antigos deixam de funcionar. | 1.0.0 → 2.0.0 |
| MINOR | Entra conteúdo novo (desafio, item, andar, tela) e os saves antigos continuam valendo. | 0.1.0 → 0.2.0 |
| PATCH | Só correção, sem conteúdo novo. | 0.1.0 → 0.1.1 |

Enquanto a versão for `0.x`, quem decide se um save antigo ainda serve é o campo interno `fmt` (hoje vale `1`). Um PNG de outro formato é recusado com a mensagem "placar de uma versão incompatível".

A versão aparece no rodapé, na Área do Professor e no placar PNG, e fica gravada dentro do save.

---

## [0.5.0-alpha] · 2026-10-27

### Novo: o jogo passa a ensinar
- **"Por que funcionou" (no acerto).** Mostra cada linha do programa com a explicação dela. Exemplo: o que o `:.2f` faz, por que o `+ 1` no fim da contagem, por que o total começa em zero fora da repetição. Logo abaixo vêm os conceitos usados no desafio, com exemplo.
- **"Entenda o raciocínio" (no erro).** Não cita nenhum comando. Tem três partes:
  - **Pista:** quando há peça falsa no programa, explica a lógica do engano daquela peça. Exemplo: "10% de desconto em 500 não é tirar 10, é tirar 50".
  - **O que o erro quer dizer:** traduz a mensagem do Python para o raciocínio. Por exemplo: "uma linha usa uma caixa ANTES de ela existir" ou "o sinal de mais tentou grudar texto com número".
  - **O caminho do programa, em palavras:** os passos da solução, sem código.
- **"O que você vai usar neste andar".** Na abertura de cada andar aparecem os conceitos novos daquele andar, cada um com explicação, exemplo e a saída do exemplo. Os exemplos são diferentes das respostas.
- **Grimório (menu).** Reúne os 26 conceitos de Python. Os de cada andar abrem quando o aluno chega nele.
- **Área do Professor → Desafios:** mostra a explicação de acerto, a pista de cada peça falsa e o caminho em palavras.
- **Auto-teste:** passou de 48 para 50 verificações (explicações completas e exemplos do Grimório rodando).

### Verificado
- **Desafios:** os 25 (24 + treino) têm explicação para cada linha, uma pista para cada peça falsa e o caminho em palavras.
- **Textos de erro:** nenhuma pista, caminho ou tradução cita comando do Python. Isso é conferido automaticamente.
- **Exemplos do Grimório:** os 26 têm a mesma saída no jogo e no Python 3.13 (o de sorteio só é conferido para rodar sem erro).
- **Tradutor de erros:** forcei 290 erros (peça falsa, degrau errado, linhas trocadas) e todos ganharam uma tradução específica, não a genérica.

### Mudou
- **Botão "Próximo desafio":** no resultado do desafio, ele aparece antes e depois da explicação, para não precisar rolar a tela.
- **Guia:** a página "Executar e corações" explica os dois painéis novos.

---

## [0.4.1-alpha] · 2026-10-27

### Corrigido
- **Leitura em voz alta.** O jogo testa na hora se aquele navegador, naquele computador, tem voz em português, em vez de adivinhar pelo nome do navegador. Sem internet, ele aceita só voz instalada no computador.
  - **Com voz:** o botão aparece normal, "🔊 Ouvir".
  - **Sem voz:** o botão vira "🔇 Sem leitura em voz alta ⓘ" e, ao tocar, explica por quê. Chrome e Edge trazem vozes em português que precisam de internet. O Firefox usa as vozes do sistema e, no Linux, depende do Speech Dispatcher.
  - O botão se atualiza sozinho quando as vozes terminam de carregar ou quando a internet cai ou volta. Em **Sistema** aparece o estado e o nome da voz usada.
- **Treino:** enquanto uma janela (como a do dado) está aberta, o destaque e a caixa do Bit somem, para não escurecer a janela.

---

## [0.4.0-alpha] · 2026-10-27

### Novo
- **Nova Jornada.** Libera quando o aluno vence os 6 andares.
  - Antes de começar, o jogo obriga a baixar o placar oficial.
  - A nota da 1ª jornada fica **congelada** e o código de conferência não muda mais, porque usa a data de fechamento.
  - Andares, estrelas, moedas e itens zeram.
  - Fazer 18 estrelas em qualquer jornada abre a Sala Secreta para sempre.
  - O cabeçalho mostra "Jornada N" e a nota com 🔒. O placar mostra a nota oficial e a jornada em andamento.
- **Liberação da Sala Secreta pelo professor.** Fica em Área do Professor → Ferramentas, numa seção que só existe depois da palavra-passe.
  - O código dessa seção vai **cifrado** no `index.html` (cifra de fluxo SHA-256 com chave derivada da palavra-passe). Procurar "Sala Secreta", "liberar" ou "trancar" no F12 não acha nada.
  - Abrir a sala não muda a nota nem o código.
- **Troca de palavra-passe.** O `config.js` gerado em Ferramentas agora inclui o módulo reservado cifrado com a frase nova (`moduloProf`).
- **Auto-teste:** passou de 45 para 48 verificações (código fixo após a Nova Jornada, cifra e abertura do módulo reservado).

### Compatível
Saves e PNGs da 0.2.x e 0.3.0 continuam valendo. Os campos novos são opcionais.

---

## [0.3.0-alpha] · 2026-10-27

### Novo
- **Visual dark fantasy em todo o jogo**, baseado na referência enviada pelo professor:
  - painéis com borda rasgada e cartões de pergaminho;
  - títulos em versalete;
  - cabeçalho com brasão, faixa de progresso dos andares, nota e moedas;
  - menu lateral no computador e barra inferior no celular.

  Toda a arte é original, em SVG: paisagem, ícones, mapa e personagem.
- **Mapa ilustrado.** Mostra os 7 andares ligados por trilha, o marcador "você está aqui", estrelas e cadeados. Também tem:
  - o painel **Missão atual**, uma checklist do que fazer agora;
  - uma legenda;
  - um cartão de detalhe do andar.
- **Mochila e Loja em grade**, com cartão de descrição do item.
- **Guia ilustrado.** São 11 páginas, cada uma com figura animada, frases curtas e o botão "Procure este botão". O botão 🔊 Ouvir lê a página em voz alta quando o computador tem voz em português.
- **Treino guiado (Sala de Treino).** É opcional e fica em destaque na tela inicial.
  - São 14 passos com o Bit, uma coruja-lanterna original, destacando cada parte da tela e esperando o aluno fazer: tocar na peça, perceber a peça falsa, usar →, rolar o dado, executar e ver o aviso de saída simulado.
  - Não vale nota e pode ser repetido.
- **Salvamento ao fim de cada andar.** O placar PNG baixa sozinho, com o aviso de enviar no Classroom ou no Drive. Isso serve para quem usa conta temporária.
- **Tela "Salvar"** com o passo a passo de entregar e de carregar o progresso em outro computador.
- **Movimento reduzido.** Animações respeitam a opção "reduzir movimento" do sistema.

### Mudou
- **Rodapé:** saiu. Som e Área do Professor foram para o cabeçalho; versão, som e "trocar jogador" estão em **Sistema**.
- **Botões do mapa:** Loja, Placar e Trocar jogador saíram do mapa e foram para o menu.

---

## [0.2.1-alpha] · 2026-10-26

### Corrigido
- **Zona segura.** A vigia de foco só conta saídas na tela do desafio, onde o código aparece. No mapa, na loja, na introdução do andar e na Área do Professor dá para sair da tela sem aviso, mesmo com andar em andamento. Fechar ou recarregar a página estando no mapa também não conta mais.

### Efeito colateral conhecido
- Um aluno pode ler o desafio, voltar ao mapa e pesquisar fora sem penalidade. Fotografar a tela com o celular já era possível antes, então o risco novo é pequeno.

---

## [0.2.0-alpha] · 2026-10-26

### Mudou
- **Colégio + turma.** O aluno escolhe primeiro o colégio (IEEL ou Adélia) e depois a turma daquele colégio. A identidade passou a ser nome + número + colégio + turma, e o placar mostra a sigla e o nome do colégio.
- **Número da chamada.** Virou uma lista de 1 a 50, sem digitação.
- **Checagem do nome.** O jogo recusa:
  - nome de uma palavra só;
  - nome com número, símbolo ou ponto;
  - partes com menos de 2 letras;
  - partes sem vogal;
  - letra repetida 3 vezes ou mais;
  - palavras de teste (teste, asdf, fulano, aluno…).
  O nome aceito é arrumado com maiúsculas iniciais ("maria EDUARDA da silva" vira "Maria Eduarda da Silva").
- **Confirmação.** Antes de criar um jogador novo, o jogo mostra os dados e pede "Confira antes de entrar".
- **`config.js`.** A lista `turmas` virou `escolas` (sigla, nome e turmas de cada colégio).
- **Auditoria.** A planilha colada precisa da coluna Colégio, que aceita a sigla ou o nome completo. O CSV ganhou a coluna Colégio.
- **Forms.** O link pré-preenchido aceita `{escola}`.
- **Auto-teste.** Passou de 41 para 45 verificações (colégio trocado, nome inválido, nome arrumado).

### Incompatível com 0.1.0-alpha
O formato interno do save passou de `fmt 1` para `fmt 2`, porque o código de conferência agora inclui o colégio. Saves, PNGs e códigos da 0.1.0-alpha são recusados ("versão antiga"). Como a 0.1.0-alpha não chegou aos alunos, ninguém perde progresso.

---

## [0.1.0-alpha] · 2026-10-26

Primeira versão jogável, gerada a partir da especificação v1.0, com as correções descritas abaixo.

### O que entrou
- **Arquivos:** `index.html` único que funciona offline, mais o `config.js` opcional.
- **Interpretador Python próprio:** cobre o subconjunto usado nos 24 desafios. O gabarito, cada peça falsa e os erros de recuo de cada desafio foram comparados com o CPython 3.13 em 329 execuções, com diferença zero. As mensagens de erro reproduzem as do CPython, incluindo as sugestões "Did you mean" e "Did you forget to import".
- **Desafios:** 6 andares com 24 desafios, 24 dicas e 3 testes por desafio. A saída esperada é calculada rodando o gabarito, sem texto fixo.
- **Montagem:** blocos arrastáveis por mouse e por toque (Pointer Events), botões ↑ ↓ ← → ✕ e três trilhos de recuo com guias pontilhadas.
- **Regras de jogo:**
  - 3 corações.
  - Desafio normal errado vai para o fim da fila.
  - Estrelas = 3 − corações perdidos, com mínimo de 1.
  - Programa incompleto não custa coração.
- **D20 de dicas:**
  - O resultado é gravado antes da animação.
  - A CD é 5, 10 ou 15 conforme a dificuldade.
  - Um 20 natural destrói uma peça falsa.
  - Rolar de novo custa 1 coração e fica travado quando resta só 1.
- **Loja:** 6 itens. A moeda vem do BOSS dos andares 1 a 5, só na primeira vitória.
- **Vigia de foco:**
  - Usa `blur`, `focus`, `visibilitychange` e `pagehide`.
  - Conta uma saída quando o aluno fica mais de 2 s fora, ou faz 3 saídas rápidas em 30 s.
  - Dá 4 avisos; na 5ª saída o aluno perde o andar.
  - Fechar ou recarregar a página no meio do andar conta como saída, se ele voltar em menos de 10 min.
- **Palavras-passe:** PRINTP, SINAL e GODMODE pelo teclado. O botão 👨‍🏫 do rodapé faz o mesmo no celular.
- **Proteção do save:**
  - O save é assinado.
  - Se for editado no F12, cai na tela "O Julgamento": as moedas são confiscadas e o placar fica marcado.
  - Todo o código roda dentro de uma IIFE.
  - Os gabaritos ficam ofuscados no HTML.
- **Placar PNG (1080×1500):**
  - Os dados vão num chunk `tEXt` com CRC-32.
  - O mesmo PNG restaura o progresso em outro aparelho.
  - O checkpoint feito com SINAL volta no mesmo desafio.
- **Código de conferência:** Crockford Base32 com checksum ligado a nome, número e turma.
- **Área do Professor:**
  - Catálogo de desafios com teste na hora e auto-montagem.
  - Catálogo de dicas.
  - Auto-teste no navegador, com 41 verificações.
  - Auditoria por planilha colada ou por PNGs arrastados, com exportação de CSV.
  - Ferramentas, incluindo um gerador de nova palavra-passe.
- **Andar bônus:** pixel art 16×16 que baixa em PNG, jogo da velha contra o Mestre da Dungeon e mesa de som.
- **Temas visuais:** um por andar. Arte e sons são originais, sem personagens nem músicas dos jogos citados.

### Mudanças em relação à especificação v1.0
| Item da v1.0 | O que mudou | Por quê |
|---|---|---|
| A6-BOSS `math.ceil(media * 10) / 10` | virou `math.ceil(round(media * 10, 2)) / 10` | Com as notas 5.5, 5.5 e 7.3, a média 6.1 virava 6.2 por erro de ponto flutuante. O professor quis corrigir só se fosse bug, e é. |
| A6-BOSS "padrão 3 trimestres" | removido; o programa sempre pergunta | A v1.0 não dizia o que acontece com entrada vazia. |
| Tolerância O/0 e I/1 em Base36 | o alfabeto passou a ser o Crockford Base32 | No Base36, O e 0 são dígitos diferentes, então a "tolerância" corromperia o código. |
| ITEM-06 Cartão de Reset (zerava saídas de tela) | virou a Ampulheta do Retorno: rejoga um andar vencido e fica a maior nota | Zerar as saídas por 1 moeda apagava a penalidade de cola. A troca atende ao pedido de "tentar de novo ficando com a maior nota". |
| Estrelas = vidas no fim | estrelas = 3 − corações perdidos | Assim a Poção não compra estrela. |
| Nota | vale a primeira vez que o andar é completado; depois é treino | Decisão do professor. |
| PRINTP, SINAL, GODMODE livres | todos pedem a palavra-passe do professor | Sem isso, qualquer aluno ganhava 3 minutos livres de vigia. |
| Senha `prof2026` | palavra-passe em frase, trocável pelo `config.js` | `prof2026` cai num ataque de dicionário em segundos. |
| Teste nº 1 com "valores escolhidos pelo aluno" | valores fixos e visíveis | Valores fixos deixam o resultado igual para todos e verificável pelo professor. |
| Skulpt opcional online | removido | Dois motores diferentes dariam saídas diferentes, e o jogo precisa funcionar offline. |
| Honeypot de spans invisíveis contra IA | não implementado | Leitores de tela leem esses spans, o que atrapalha alunos com deficiência visual. E não existe peça "erro_ia" para o aluno arrastar, então a armadilha nunca dispararia. |
| Frase do GTA com palavrão | "Ah, lá vamos nós codar de novo." | É material escolar, e uma das escolas é cívico-militar. |
| Nomes de desafios diferentes entre as seções 1 e 3 da v1.0 | foi escolhido um nome por ID (ver especificação v1.1) | As duas seções se contradiziam. |

### Limitações conhecidas
- **Segurança:** tudo roda no navegador do aluno. A assinatura e o código de conferência barram a edição casual, mas quem ler o código-fonte com calma consegue forjar um save. Os valores fora do comum aparecem nos sinais que o professor vê: HACK, TESTE, restaurações e horário.
- **"Primeira vez vale":** um aluno pode jogar num aparelho, ir mal e começar do zero em outro aparelho sem PNG. O placar mostra a data e as restaurações, mas não consegue provar que isso aconteceu.
- **PNG recomprimido:** WhatsApp, prints de tela e alguns editores apagam o chunk `tEXt`. A auditoria acusa "PNG SEM DADOS".
- **Celular:** as palavras-passe pelo teclado exigem teclado físico. No celular, use o botão 👨‍🏫 do rodapé.
- **Vigia de foco:** abrir o menu de notificações ou receber uma ligação no celular conta como saída de tela.
