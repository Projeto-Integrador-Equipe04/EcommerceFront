import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-[#FEF9E1]">

      <section className="text-center px-4 mb-6">
        <h2 className="text-3xl font-extrabold text-[#C14600] leading-tight">
          Bem-vindo ao <span className="text-[#FF9D23]">FoodEats!</span>
        </h2>
        <p className="mt-2 text-lg text-[#FF9D23] max-w-xl mx-auto">
          Escolha seus pratos favoritos e receba em casa com rapidez e qualidade. Faça seu pedido com apenas alguns cliques!
        </p>
      </section>

      <section className="text-center mb-10 px-4">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7541/7541900.png" 
          alt="Comida sendo entregue" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </section>

      <section className="text-center mt-4 px-4">
        <h3 className="text-xl font-semibold text-[#C14600]">Pronto para pedir?</h3>
        <p className="mt-2 text-md text-[#FF9D23] max-w-2xl mx-auto">
          Explore nossos pratos e faça seu pedido agora mesmo! Garantimos uma entrega rápida e com muito sabor.
        </p>
        <Link to="/product" className="text-white text-lg">
          <button className="mt-4 px-6 py-2 bg-[#C14600] text-white text-lg rounded-xl hover:bg-[#FF9D23] transition duration-300 transform hover:scale-105">
            Faça seu Pedido
          </button>
        </Link>
      </section>

    </div>
  );
}

export default Home;
