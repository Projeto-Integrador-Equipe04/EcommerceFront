import React from 'react';

// Interface para o tipo Produto
interface Produto {
  id_produto: number;
  nome: string;
  descricao: string;
  preco: number;
}

// produtos
const produtos: Produto[] = [
  {
    id_produto: 1,
    nome: 'Agua mineral',
    descricao: 'Garrafa de agua 500ml',
    preco: 3.00,
  },
  {
    id_produto: 2,
    nome: 'Coca-Cola',
    descricao: 'Refrigerante de cola 350ml',
    preco: 4.00,
  },
  {
    id_produto: 3,
    nome: 'Strogonnof',
    descricao: 'Strogonnof de frango, acompanha arroz e batata palha',
    preco: 35.00,
  },
  {
    id_produto: 4,
    nome: 'Batata Frita',
    descricao: 'Porção de batata frita crocante 200g',
    preco: 10.00,
},
{
    id_produto: 5,
    nome: 'Sanduíche de Frango',
    descricao: 'Sanduíche de frango grelhado com maionese 150g',
    preco: 15.00,
},
{
    id_produto: 6,
    nome: 'Pizza Margherita',
    descricao: 'Pizza de mussarela e manjericão 500g',
    preco: 30.00,
},
{
    id_produto: 7,
    nome: 'Suco de Laranja',
    descricao: 'Suco natural de laranja 300ml',
    preco: 5.00,
},
 
];

const ListaProdutos: React.FC = () => {
  return (
    <div className="bg-[#400101] text-white font-sans min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#F2B705' }}>Lista de Produtos</h1>

        {/* Grid para os Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div
              key={produto.id_produto}
              className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2" style={{ color: '#F29F05' }}>
                {produto.nome}
              </h2>
              <p className="text-sm mb-4">{produto.descricao}</p>
              <p className="text-lg font-bold mt-auto" style={{ color: '#F2B705' }}>
                R$ {produto.preco.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaProdutos;