const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("public", { extensions: ["html"] }));

const produtos = [
  { 
    id: 1, 
    name: "CORRENTE VENEZIANA", 
    price: 89.00, 
    poster_path: "/correntes/veneziana/poster_path.jpg",
    image_about_1: "/correntes/veneziana/image_about_1.jpg", 
    image_about_2: "/correntes/veneziana/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "1 mm"}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "45cm", price: 89.00 },
      { size: "50cm", price: 99.00 },
      { size: "60cm", price: 109.00 },
      { size: "70cm", price: 119.00 },
    ],
    category: "correntes",
  },
  { 
    id: 2, 
    name: "CORRENTE GRUMET 2mm", 
    price: 129.00, 
    poster_path: "/correntes/grummet2mm/poster_path.jpg",
    image_about_1: "/correntes/grummet2mm/image_about_1.jpg", 
    image_about_2: "/correntes/grummet2mm/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "2 mm"}, {comprimento: "60cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 129.00 },
    ],
    category: "correntes",
  },
  { 
    id: 3, 
    name: "CORRENTE GRUMET 3mm", 
    price: 139.00, 
    poster_path: "/correntes/grummet3mm/poster_path.jpg",
    image_about_1: "/correntes/grummet3mm/image_about_1.jpg", 
    image_about_2: "/correntes/grummet3mm/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "3 mm"}, {comprimento: "60cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 139.00 },
    ],
    category: "correntes",
  },
  { 
    id: 4, 
    name: "CORRENTE CADEADO FINA", 
    price: 119.00, 
    poster_path: "/correntes/cadeado/poster_path.jpg",
    image_about_1: "/correntes/cadeado/image_about_1.jpg", 
    image_about_2: "/correntes/cadeado/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "1 mm"}, {comprimento: "60cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 89.00 },
    ],
    category: "correntes",
  },
  { 
    id: 31, 
    name: "COLAR CRUCIFIXO PEQUENO", 
    price: 109.00, 
    poster_path: "/colares/crucifixoP/poster_path.jpg",
    image_about_1: "/colares/crucifixoP/image_about_1.jpg", 
    image_about_2: "/colares/crucifixoP/image_about_2.jpg",
    image_about_3: "/colares/crucifixoP/image_about_3.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { pingente: "1,1 x 2,1cm "}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Corrente veneziana, Espessura Corrente: 1mm"],
    sizes: [
      { size: "45cm", price: 99.00 },
      { size: "50cm", price: 109.00 },
      { size: "60cm", price: 119.00 },
      { size: "70cm", price: 129.00 },
    ],
    category: "colares",
  },
  { 
    id: 32, 
    name: "COLAR CRUCIFIXO MÉDIO", 
    price: 109.00, 
    poster_path: "/colares/crucifixoM/poster_path.jpg",
    image_about_1: "/colares/crucifixoM/image_about_1.jpg", 
    image_about_2: "/colares/crucifixoM/image_about_2.jpg",
    image_about_3: "/colares/crucifixoM/image_about_3.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { pingente: "1,5 x 2,6cm "}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Corrente veneziana, Espessura Corrente: 1mm"],
    sizes: [
      { size: "45cm", price: 109.00 },
      { size: "50cm", price: 119.00 },
      { size: "60cm", price: 129.00 },
      { size: "70cm", price: 139.00 },
    ],
    category: "colares",
  },
  { 
    id: 33, 
    name: "COLAR SÃO BENTO", 
    price: 129.00, 
    poster_path: "/colares/saoBento/poster_path.jpg",
    image_about_1: "/colares/saoBento/image_about_1.jpg", 
    image_about_2: "/colares/saoBento/image_about_2.jpg",
    image_about_3: "/colares/saoBento/image_about_3.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { pingente: "1,4 x 1,4cm "}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Corrente veneziana, Espessura Corrente: 1mm"],
    sizes: [
      { size: "45cm", price: 129.00 },
      { size: "50cm", price: 129.00 },
      { size: "60cm", price: 139.00 },
      { size: "70cm", price: 149.00 },
    ],
    category: "colares",
  },
  { 
    id: 34, 
    name: "COLAR PAI NOSSO", 
    price: 139.00, 
    poster_path: "/colares/paiNosso/poster_path.jpg",
    image_about_1: "/colares/paiNosso/image_about_1.jpg", 
    image_about_2: "/colares/paiNosso/image_about_2.jpg",
    image_about_3: "/colares/paiNosso/image_about_3.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { pingente: "1,9 x 1,9cm "}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Corrente veneziana, Espessura Corrente: 1mm"],
    sizes: [
      { size: "45cm", price: 139.00 },
      { size: "50cm", price: 149.00 },
      { size: "60cm", price: 159.00 },
      { size: "70cm", price: 169.00 },
    ],
    category: "colares",
  },
  { 
    id: 35, 
    name: "COLAR PONTO DE LUZ", 
    price: 99.00, 
    poster_path: "/colares/pontoDeLuz/poster_path.jpg",
    image_about_1: "/colares/pontoDeLuz/image_about_1.jpg", 
    image_about_2: "/colares/pontoDeLuz/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { pingente: "0,8 x 0,8 cm"}, {comprimento: "45cm, 50cm, 60cm e 70cm"}, "Corrente veneziana, Espessura Corrente: 1mm"],
    sizes: [
      { size: "45cm", price: 99.00 },
      { size: "50cm", price: 109.00 },
      { size: "60cm", price: 119.00 },
      { size: "70cm", price: 129.00 },
    ],
    category: "colares",
  },
  { 
    id: 11, 
    name: "PULSEIRA LAMINADA", 
    price: 129.00, 
    poster_path: "/pulseiras/laminada/poster_path.jpg",
    image_about_1: "/pulseiras/laminada/image_about_1.jpg", 
    image_about_2: "/pulseiras/laminada/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "3 mm"}, {comprimento: "18,9cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 129.00 },
    ],
    category: "pulseiras",
  },
  { 
    id: 12, 
    name: "PULSEIRA GRUMET 2mm", 
    price: 97.00, 
    poster_path: "/pulseiras/grumet2mm/poster_path.jpg",
    image_about_1: "/pulseiras/grumet2mm/image_about_1.jpg", 
    image_about_2: "/pulseiras/grumet2mm/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "2 mm"}, {comprimento: "20,9cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 129.00 },
    ],
    category: "pulseiras",
  },
  { 
    id: 13, 
    name: "PULSEIRA GRUMET 3mm", 
    price: 107.00, 
    poster_path: "/pulseiras/grumet3mm/poster_path.jpg",
    image_about_1: "/pulseiras/grumet3mm/image_about_1.jpg", 
    image_about_2: "/pulseiras/grumet3mm/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "3 mm"}, {comprimento: "18,5cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 107.00 },
    ],
    category: "pulseiras",
  },
  { 
    id: 14, 
    name: "PULSEIRA CADEADO", 
    price: 89.00, 
    poster_path: "/pulseiras/cadeado/poster_path.jpg",
    image_about_1: "/pulseiras/cadeado/image_about_1.jpg", 
    image_about_2: "/pulseiras/cadeado/image_about_2.jpg",
    image_about_3: "/pulseiras/cadeado/image_about_3.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "2,1 mm"}, {comprimento: "17,9cm"}, "Fabricada na Itália"],
    sizes: [
      { size: "ÚNICO", price: 89.00 },
    ],
    category: "pulseiras",
  },
  { 
    id: 21, 
    name: "BRINCO PONTO DE LUZ PEQUENO", 
    price: 49.00, 
    poster_path: "/brincos/pontoDeLuzP/poster_path.jpg",
    image_about_1: "/brincos/pontoDeLuzP/image_about_1.jpg", 
    image_about_2: "/brincos/pontoDeLuzP/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", "Par de brincos pequenos, com pedra de zircônia e 100% de prata 925.", { tamanho: "0,5 mm"}],
    sizes: [
      { size: "ÚNICO", price: 49.00 },
    ],
    category: "brincos",
  },
  { 
    id: 22, 
    name: "BRINCO PONTO DE LUZ GRANDE", 
    price: 57.00, 
    poster_path: "/brincos/pontoDeLuzG/poster_path.jpg",
    image_about_1: "/brincos/pontoDeLuzG/image_about_1.jpg", 
    image_about_2: "/brincos/pontoDeLuzG/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", "Par de brincos grandes, com pedra de zircônia e 100% de prata 925.", { tamanho: "0,8 mm"}],
    sizes: [
      { size: "ÚNICO", price: 57.00 },
    ],
    category: "brincos",
  },
  { id: 23, 
    name: "ARGOLA CRAVEJADA", 
    price: 97.00, 
    poster_path: "/brincos/argolaCravejada/poster_path.jpg",
    image_about_1: "/brincos/argolaCravejada/image_about_1.jpg", 
    image_about_2: "/brincos/argolaCravejada/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", "Par de argolas pequenas, com pedras de zircônia e 100% de prata 925.", { tamanho: "1 cm"}],
    sizes : [
      { size: "ÚNICO", price: 57.00 },
    ],  
    category: "brincos",
  },
  { id: 41, 
    name: "CONJUNTO VENEZIANA", 
    price: 208.00, 
    poster_path: "/conjuntos/veneziana/poster_path.jpg",
    image_about_1: "/conjuntos/veneziana/image_about_1.jpg", 
    image_about_2: "/conjuntos/veneziana/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "1 mm"}, {comprimento: "50cm e 60cm"}],
    sizes : [
      { size: "ÚNICO", price: 208.00 },
    ],
    category: "conjuntos",  
  },
  { id: 42, 
    name: "CONJUNTO VENEZIANA E CRUCIFIXO", 
    price: 218.00, 
    poster_path: "/conjuntos/venezianaECrucifixo/poster_path.jpg",
    image_about_1: "/conjuntos/venezianaECrucifixo/image_about_1.jpg", 
    image_about_2: "/conjuntos/venezianaECrucifixo/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "1 mm"}, {comprimento: "50cm e 60cm"}, {pingente: "1,1 x 2,1cm"}],
    sizes : [
      { size: "ÚNICO", price: 218.00 },
    ] ,
    category: "conjuntos",  
  },
  { id: 43, 
    name: "CONJUNTO VENEZIANA E PAI NOSSO", 
    price: 248.00, 
    poster_path: "/conjuntos/venezianaEPaiNosso/poster_path.jpg",
    image_about_1: "/conjuntos/venezianaEPaiNosso/image_about_1.jpg", 
    image_about_2: "/conjuntos/venezianaEPaiNosso/image_about_2.jpg",
    description: ["Dados do produto:","Dimensões aproximadas", { espessura: "1 mm"}, {comprimento: "50cm e 60cm"}, {pingente: "1,9 x 1,9cm"}],
    sizes : [
      { size: "ÚNICO", price: 248.00 },
    ],
    category: "conjuntos",   
  },
];

app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/api/produtos/:id", (req, res) => {
  const produtoId = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === produtoId);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ mensagem: "Produto não encontrado" });
  }
});

app.get("/api/categoria/:slug", (req, res) => {
  const slug = req.params.slug;
  console.log("Categoria solicitada:", slug);

  const produtosFiltrados = slug ? produtos.filter(p => p.category === slug) : produtos;
  console.log("Produtos filtrados:", produtosFiltrados);
  
  res.json(produtosFiltrados);
});

app.get("/api/search", (req, res) => {
  const searchTerm = req.query.q.toLowerCase();
  console.log("Termo de busca:", searchTerm)
  const resultadosPesquisa = produtos.filter((produto) => {
    return produto.name.toLowerCase().includes(searchTerm);
  });
  console.log("Resultados da pesquisa:", resultadosPesquisa)
  res.json(resultadosPesquisa);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
