


// ...existing code...

let carrinho = [];
const iconeCarrinho = document.querySelector('.fa-cart-shopping');
const divCarrinho = document.getElementById('carrinho-pedidos');
const listaPedidos = document.getElementById('lista-pedidos');
const btnFechar = document.getElementById('fechar-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const btnFinalizar = document.getElementById('finalizar-pedido');
const mensagemCarrinho = document.getElementById('mensagem-carrinho');

// Adiciona evento aos botões "Adicionar"
document.querySelectorAll('.btn button').forEach(function (botao) {
    botao.addEventListener('click', function () {
        const card = botao.closest('.card');
        const nome = card.querySelector('h3').textContent;
        const preco = card.querySelector('.btn span').textContent.replace('RS', '').replace(',', '.').trim();
        carrinho.push({ nome, preco: parseFloat(preco) });
        mensagemCarrinho.textContent = 'Produto adicionado ao carrinho!';
        setTimeout(() => mensagemCarrinho.textContent = '', 2000);
    });
});



// Mostra o carrinho ao clicar no ícone
iconeCarrinho.addEventListener('click', function() {
    listaPedidos.innerHTML = '';
    mensagemCarrinho.textContent = '';
    let total = 0;
    if (carrinho.length === 0) {
        listaPedidos.innerHTML = '<li>Nenhum pedido adicionado.</li>';
        totalCarrinho.textContent = '';
    } else {
        carrinho.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`;

            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.className = 'btn-remover';
            btnRemover.style.marginLeft = '10px';
            btnRemover.onclick = function() {
                carrinho.splice(index, 1);
                iconeCarrinho.click();
            };

            li.appendChild(btnRemover);
            listaPedidos.appendChild(li);
            total += item.preco;
        });
        totalCarrinho.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    divCarrinho.style.display = 'block';
});

btnFinalizar.addEventListener('click', function() {
    if (carrinho.length === 0) {
        mensagemCarrinho.textContent = 'Seu carrinho está vazio!';
        setTimeout(() => mensagemCarrinho.textContent = '', 2000);
        return;
    }
    mensagemCarrinho.textContent = 'Pedido finalizado com sucesso!';
    carrinho = [];
    setTimeout(() => {
        divCarrinho.style.display = 'none';
        mensagemCarrinho.textContent = '';
    }, 2000);
});

btnFechar.addEventListener('click', function() {
    divCarrinho.style.display = 'none';
    mensagemCarrinho.textContent = '';
});

btnFechar.addEventListener('click', function() {
    divCarrinho.style.display = 'none';
});

// ...existing code...

// Abrir modal ao clicar no ícone de usuário
document.querySelector('.login .fa-user').addEventListener('click', function() {
    document.getElementById('modal-login').style.display = 'flex';
});

// Fechar modal
document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal-login').style.display = 'none';
};

// Simulação de cadastro e login (localStorage)
document.getElementById('form-cadastro').onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById('novo-usuario').value;
    const pass = document.getElementById('nova-senha').value;
    localStorage.setItem('usuario', user);
    localStorage.setItem('senha', pass);
    document.getElementById('msg-login').innerText = 'Cadastro realizado!';
};

document.getElementById('form-login').onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;
    if (user === localStorage.getItem('usuario') && pass === localStorage.getItem('senha')) {
        document.getElementById('msg-login').innerText = 'Login realizado com sucesso!';
        setTimeout(() => {
            document.getElementById('modal-login').style.display = 'none';
        }, 1000);
    } else {
        document.getElementById('msg-login').innerText = 'Usuário ou senha incorretos!';
    }
};

document.getElementById('btn-cadastro').onclick = function() {
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-cadastro').style.display = 'flex';
};

document.getElementById('btn-login').onclick = function() {
    document.getElementById('form-cadastro').style.display = 'none';
    document.getElementById('form-login').style.display = 'flex';
};

// Opcional: após cadastro, voltar para login
document.getElementById('form-cadastro').onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById('novo-usuario').value;
    const pass = document.getElementById('nova-senha').value;
    localStorage.setItem('usuario', user);
    localStorage.setItem('senha', pass);
    document.getElementById('msg-login').innerText = 'Cadastro realizado!';
    setTimeout(() => {
        document.getElementById('form-cadastro').style.display = 'none';
        document.getElementById('form-login').style.display = 'flex';
        document.getElementById('msg-login').innerText = '';
    }, 1500);
};