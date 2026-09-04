// ===============================
// DATA ATUAL
// ===============================

const hoje = new Date();

document.getElementById("dataAtual").innerText =
    "Atualizado em " +
    hoje.toLocaleDateString("pt-BR");


// ===============================
// PRODUTOS
// ===============================

const produtos = [

    {
        nome: "Soja",
        icone: "🌱",
        preco: 135.00,
        unidade: "saca de 60 kg",
        variacao: 1.20
    },

    {
        nome: "Milho",
        icone: "🌽",
        preco: 62.50,
        unidade: "saca de 60 kg",
        variacao: -0.80
    },

    {
        nome: "Trigo",
        icone: "🌾",
        preco: 78.40,
        unidade: "saca de 60 kg",
        variacao: 0.45
    },

    {
        nome: "Café",
        icone: "☕",
        preco: 1180.00,
        unidade: "saca de 60 kg",
        variacao: 2.10
    },

    {
        nome: "Arroz",
        icone: "🍚",
        preco: 105.00,
        unidade: "saca de 50 kg",
        variacao: -0.30
    },

    {
        nome: "Algodão",
        icone: "🌿",
        preco: 145.00,
        unidade: "arroba",
        variacao: 0.75
    },

    {
        nome: "Boi Gordo",
        icone: "🐂",
        preco: 320.00,
        unidade: "arroba",
        variacao: 0.60
    },

    {
        nome: "Açúcar",
        icone: "🧂",
        preco: 138.00,
        unidade: "saca de 50 kg",
        variacao: -0.50
    }

];


// ===============================
// MOSTRAR PRODUTOS
// ===============================

function mostrarProdutos(lista) {

    const container =
        document.getElementById("listaProdutos");

    container.innerHTML = "";

    lista.forEach(produto => {

        const classe =
            produto.variacao >= 0
            ? "alta"
            : "baixa";

        const seta =
            produto.variacao >= 0
            ? "▲"
            : "▼";

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="produto-topo">

                <h3>${produto.nome}</h3>

                <span class="icone">
                    ${produto.icone}
                </span>

            </div>

            <div class="preco">
                R$ ${produto.preco.toLocaleString(
                    "pt-BR",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                )}
            </div>

            <div class="unidade">
                por ${produto.unidade}
            </div>

            <div class="${classe}">
                ${seta} ${produto.variacao.toFixed(2)}%
            </div>
        `;

        container.appendChild(card);

    });
}


// Mostrar produtos quando o site abrir

mostrarProdutos(produtos);


// ===============================
// PESQUISA
// ===============================

const pesquisa =
    document.getElementById("pesquisa");

pesquisa.addEventListener("input", function () {

    const texto =
        pesquisa.value.toLowerCase();

    const resultado =
        produtos.filter(produto =>
            produto.nome
                .toLowerCase()
                .includes(texto)
        );

    mostrarProdutos(resultado);

});
