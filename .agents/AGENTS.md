# Regras para Máscaras do Neonews (HTML5 Templates)

Sempre que o usuário solicitar a edição, modificação ou criação de uma "máscara" (template) para o sistema **Neonews**, você DEVE seguir rigidamente as regras abaixo para evitar quebrar o painel de **Customização de Cores** do sistema:

1. **Intocabilidade Estrutural do JS Base**: O painel do Neonews varre o arquivo JS gerado pelo Adobe Animate via *Regex* para mapear cores (`graphics.f("#HEX")`, `cjs.Text(..., "#HEX")`). 
   - **JAMAIS** altere a estrutura global do arquivo JS original (ex: `Verticaltvone2026.js`).
   - **NÃO** oculte shapes nativos (como o fundo) tentando recriá-los, pois isso quebra a legibilidade do painel que os usuários usam. Mantenha os `shape_1` e `shape_2` visíveis.
   - Para ocultar itens (como logos padrão que ficam em caixas pretas), utilize `visible = false` injetado pelo HTML, não modifique a declaração no JS.

2. **Um Único Script de Origem no HTML**: O parser do Neonews foi programado para procurar a tag `<script src="...">` e ler **apenas o último script listado** (ignorando a pasta `libs/`).
   - Se você colocar lógicas de animação em um arquivo externo (ex: `animacao.js`) e inseri-lo no HTML depois do script principal, o Neonews vai escanear *apenas* `animacao.js` e as cores do painel sumirão.
   - **A Solução (Obrigatória)**: Concatene qualquer lógica adicional no **extremo final** do arquivo JS base original.

3. **Correção do Bug da Cotação (Encoding)**:
   - Arquivos originais em ANSI sofrem bug ao tentar validar `moeda == 'Dólar'` com os dados em UTF-8 do Neonews.
   - Sempre sobrescreva a função `exportRoot.SetarCotacao = function(moeda, valor, negativo)` no final do script, utilizando validação sem acentos: `if (moeda.toUpperCase().indexOf('DOLAR') > -1)`.

4. **Codificação e Compressão Segura**:
   - Mantenha o arquivo JS principal em **ANSI (latin1)**. Se for usar Node.js para concatenar, leia e escreva em `latin1`.
   - Para compactar o `.zip` final do template, use **SEMPRE** o `tar.exe` nativo do Windows: `tar.exe -a -c -f nome_template.zip *`. Nunca use `Compress-Archive` do PowerShell.

---

### Passo a Passo de Construção Seguro (Workflow do Agente)

Para construir o template completo **sem precisar de arquivos externos além deste AGENTS.md**:

1. **Extraia** o arquivo base limpo original (ex: `testee`).
2. **Crie a lógica** de animação e de correção (Dólar) em uma string JavaScript dentro do seu prompt/memória.
3. **Anexe a lógica** de animação no final do arquivo JS principal original (respeitando o enconding `latin1`), fora do escopo da biblioteca original.
4. **Altere o HTML** apenas para:
   - Chamar a nova função (ex: `iniciarAnimacao(exportRoot, stage);`) dentro do `handleComplete`.
   - Aumentar o framerate via `createjs.Ticker.setFPS(60);`.
5. **Comprima o pacote** executando na pasta raiz do template o comando: `tar.exe -a -c -f ../pacote_final.zip *`.

Não crie UIs complexas adicionais a menos que estritamente solicitado, pois cores `#HEX` chapadas criadas no seu código podem interferir negativamente na percepção de cores do usuário ou não conseguir acompanhar o painel de customização.
