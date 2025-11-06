🚀 Sobre o Projeto
O EsToDoList é uma aplicação front-end que permite aos usuários gerenciar suas tarefas diárias de forma eficiente. O projeto foi desenvolvido com o objetivo de praticar e demonstrar habilidades em desenvolvimento web moderno, seguindo princípios de código limpo e arquitetura bem estruturada.

✨ Funcionalidades
✅ Adicionar Tarefas: Insira novas tarefas através do campo de entrada

🗑️ Excluir Tarefas: Remova tarefas com confirmação de segurança

📝 Editar Tarefas: Modifique o texto das tarefas existentes

🎯 Marcar como Concluída: Alternar entre tarefas ativas e concluídas

🔍 Pesquisar Tarefas: Busque tarefas específicas por texto

📊 Filtrar Tarefas: Visualize todas, apenas ativas ou apenas concluídas

💾 Persistência de Dados: Salva automaticamente no localStorage do navegador

⌨️ Atalhos de Teclado: Adicione tarefas pressionando Enter

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica da aplicação

Tailwind CSS: Framework CSS para estilização responsiva

JavaScript Vanilla: Lógica da aplicação e manipulação do DOM

localStorage: Persistência de dados no navegador

📋 Como Usar
Pré-requisitos
Navegador web moderno (Chrome, Firefox, Safari, Edge)

Servidor web local (opcional, pode ser executado diretamente no navegador)

Instalação e Execução
Clone ou baixe os arquivos do projeto

bash
# Se estiver usando Git
git clone [url-do-repositorio]
Estrutura de arquivos

text
projeto-todo-list/
├── index.html
├── script.js
└── README.md
Execute a aplicação

Abra o arquivo index.html diretamente no navegador

Ou sirva através de um servidor local:

bash
# Com Python
python -m http.server 8000

# Com Node.js (se tiver o http-server instalado)
npx http-server
🎮 Como Utilizar a Aplicação
Adicionar Tarefa

Digite a tarefa no campo de texto

Clique no botão "+" ou pressione Enter

Gerenciar Tarefas

Clique no texto: Marcar/desmarcar como concluída

✏️ Editar: Clique no ícone de lápis para modificar

🗑️ Excluir: Clique no ícone de lixeira para remover

Buscar e Filtrar

Use o campo de pesquisa para encontrar tarefas específicas

Selecione o filtro para ver "Todos", "Ativos" ou "Concluídos"

🏗️ Arquitetura do Projeto
O código segue uma arquitetura modular e organizada:

Separação de Responsabilidades: Funções específicas para cada operação

Manipulação de Estado: Array centralizado para gerenciar tarefas

Persistência: Integração transparente com localStorage

Event-Driven: Sistema de eventos para interações do usuário

🔧 Estrutura do Código
javascript
// Estrutura principal das funções:
- carregarTarefasSalvas()    // Carrega do localStorage
- salvarTarefas()           // Salva no localStorage  
- adicionarTarefa()         // Cria nova tarefa
- exibirTarefas()           // Renderiza na tela
- alternarConclusao()       // Marca/desmarca concluída
- editarTarefa()           // Modifica texto
- excluirTarefa()          // Remove com confirmação
- pesquisarTarefas()       // Busca por termo
- filtrarTarefas()         // Filtra por status
🎨 Design e Interface
Design Responsivo: Adapta-se a diferentes tamanhos de tela

Tailwind CSS: Utilização de classes utilitárias para estilização

Feedback Visual: Estados de hover e transições suaves

Ícones Intuitivos: Emojis para ações comuns

Tipografia: Fonte Comic Sans MS para aspecto descontraído

📱 Compatibilidade
✅ Desktop (Windows, macOS, Linux)

✅ Tablets

✅ Smartphones

✅ Navegadores modernos

🔮 Possíveis Melhorias Futuras
Categorias ou tags para tarefas

Datas de vencimento

Prioridades (alta, média, baixa)

Modo escuro/claro

Sincronização com backend

Exportação/importação de dados

Notificações

👨‍💻 Desenvolvido por
Estudante de programação focado em desenvolvimento front-end e boas práticas de código.