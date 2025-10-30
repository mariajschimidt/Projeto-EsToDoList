// =============================================================
//  EsToDoList - CRUD básico de tarefas
//  Autor: Prof. Rafael Ribas
//  Objetivo: Introduzir JavaScript com um exemplo prático
// =============================================================

// -------------------------------
// 1. Selecionar os elementos da página
// -------------------------------
const campoNovaTarefa = document.getElementById('nova-tarefa-input')
const botaoAdicionar = document.getElementById('adicionar-tarefa-btn')
const listaTarefas = document.getElementById('lista-de-tarefas')
const campoPesquisa = document.getElementById('pesquisa-input')
const seletorFiltro = document.getElementById('filtro-select')

// Array principal que armazenará todas as tarefas
let tarefas = []

// -------------------------------
// 2. Carregar tarefas salvas no navegador (localStorage)
// -------------------------------
function carregarTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas')
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas) // converte o texto salvo em array
        exibirTarefas(tarefas)
    }
}

// -------------------------------
// 3. Salvar as tarefas no navegador
// -------------------------------
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

// -------------------------------
// 4. Função para adicionar uma nova tarefa
// -------------------------------
function adicionarTarefa() {
    const texto = campoNovaTarefa.value.trim() // remove espaços extras

    if (texto === '') {
        alert('Digite uma tarefa antes de adicionar!')
        return
    }

    // Criamos um objeto representando a tarefa
    const novaTarefa = {
        id: Date.now(), // cria um número único com base no tempo atual
        texto: texto,
        concluida: false
    }

    // Adicionamos ao array e salvamos
    tarefas.push(novaTarefa)
    salvarTarefas()

    // Atualizamos a lista exibida
    exibirTarefas(tarefas)

    // Limpamos o campo de texto
    campoNovaTarefa.value = ''
    campoNovaTarefa.focus()
}

// -------------------------------
// 5. Função para exibir as tarefas na tela
// -------------------------------
function exibirTarefas(listaParaMostrar) {
    // Limpamos a lista antes de mostrar novamente
    listaTarefas.innerHTML = ''

    // Se não houver tarefas, exibe mensagem
    if (listaParaMostrar.length === 0) {
        const li = document.createElement('li')
        li.className = 'text-center p-3 text-gray-500 dark:text-gray-400'
        li.textContent = 'Nenhuma tarefa encontrada.'
        listaTarefas.appendChild(li)
        return
    }

    // Percorremos todas as tarefas do array
    for (let tarefa of listaParaMostrar) {
        // Criar um elemento <li> para cada tarefa
        const item = document.createElement('li')
        item.className = 'flex justify-between items-center p-3 border border-gray-300 dark:border-zinc-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-zinc-600 transition duration-150 ease-in-out'
        item.dataset.id = tarefa.id
        
        // Estilo para tarefa concluída
        if (tarefa.concluida) {
            item.classList.add('bg-gray-100', 'dark:bg-zinc-600')
        }

        // Container para checkbox e texto
        const checkboxContainer = document.createElement('div')
        checkboxContainer.className = 'flex items-center space-x-3'
        
        // Checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = tarefa.concluida
        checkbox.className = 'w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600'
        checkbox.onchange = function () {
            alternarConclusao(tarefa.id)
        }

        // Texto da tarefa
        const textoTarefa = document.createElement('span')
        textoTarefa.textContent = tarefa.texto
        textoTarefa.className = tarefa.concluida 
            ? 'line-through text-gray-500 dark:text-gray-400 cursor-pointer' 
            : 'text-zinc-700 dark:text-white cursor-pointer'
        
        textoTarefa.onclick = function () {
            alternarConclusao(tarefa.id)
        }

        // Botões de ação
        const botoes = document.createElement('div')
        botoes.className = 'flex space-x-2'

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = '✏️'
        botaoEditar.className = 'text-indigo-600 hover:text-indigo-700'
        botaoEditar.onclick = function () {
            editarTarefa(tarefa.id)
        }

        const botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = '🗑️'
        botaoExcluir.className = 'text-red-600 hover:text-red-700'
        botaoExcluir.onclick = function () {
            excluirTarefa(tarefa.id)
        }

        // Montamos o elemento completo
        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(textoTarefa)
        botoes.appendChild(botaoEditar)
        botoes.appendChild(botaoExcluir)
        item.appendChild(checkboxContainer)
        item.appendChild(botoes)
        listaTarefas.appendChild(item)
    }
}

// -------------------------------
// 6. Função para alternar entre concluída e ativa
// -------------------------------
function alternarConclusao(id) {
    for (let tarefa of tarefas) {
        if (tarefa.id === id) {
            tarefa.concluida = !tarefa.concluida
        }
    }
    salvarTarefas()
    exibirTarefas(tarefas)
}

// -------------------------------
// 7. Função para editar o texto de uma tarefa
// -------------------------------
function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id)
    const novaDescricao = prompt('Edite a tarefa:', tarefa.texto)

    if (novaDescricao === null || novaDescricao.trim() === '') {
        return // se cancelar ou deixar em branco, não faz nada
    }

    for (let tarefa of tarefas) {
        if (tarefa.id === id) {
            tarefa.texto = novaDescricao.trim()
        }
    }
    salvarTarefas()
    exibirTarefas(tarefas)
}

// -------------------------------
// 8. Função para excluir uma tarefa
// -------------------------------
function excluirTarefa(id) {
    const confirmar = window.confirm('Tem certeza que deseja excluir esta tarefa?')

    if (confirmar) {
        tarefas = tarefas.filter(function (tarefa) {
            return tarefa.id !== id
        })
        salvarTarefas()
        exibirTarefas(tarefas)
    }
}

// -------------------------------
// 9. Função de pesquisa
// -------------------------------
function pesquisarTarefas() {
    const termo = campoPesquisa.value.toLowerCase()
    const tarefasFiltradas = tarefas.filter(function (tarefa) {
        return tarefa.texto.toLowerCase().includes(termo)
    })
    exibirTarefas(tarefasFiltradas)
}

// -------------------------------
// 10. Filtro: todos / ativos / concluídos
// -------------------------------
function filtrarTarefas() {
    const tipo = seletorFiltro.value
    let filtradas = []

    if (tipo === 'todos') {
        filtradas = tarefas
    } else if (tipo === 'ativos') {
        filtradas = tarefas.filter(tarefa => !tarefa.concluida)
    } else if (tipo === 'concluidos') {
        filtradas = tarefas.filter(tarefa => tarefa.concluida)
    }

    exibirTarefas(filtradas)
}

// -------------------------------
// 11. Eventos (interações do usuário)
// -------------------------------
botaoAdicionar.addEventListener('click', adicionarTarefa)
campoPesquisa.addEventListener('input', pesquisarTarefas)
seletorFiltro.addEventListener('change', filtrarTarefas)

// -------------------------------
// 12. Permitir adicionar tarefa ao pressionar Enter
// -------------------------------
campoNovaTarefa.addEventListener('keydown', function (evento) {
    // Verifica se a tecla pressionada foi "Enter"
    if (evento.key === 'Enter') {
        adicionarTarefa()
    }
})

// -------------------------------
// 13. Quando a página carregar, buscamos as tarefas salvas
// -------------------------------
window.onload = carregarTarefasSalvas