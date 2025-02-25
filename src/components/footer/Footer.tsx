
const Footer = () => {
  return (
    <footer className="bg-[#C14600] text-white py-2 mt-auto">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-left">FoodEats</h3>
            <p className="text-sm">A melhor comida para você!</p>
          </div>

          <div className="flex flex-col items-end text-left">
            <h4 className="text-xl font-semibold">Contato</h4>
            <p className="text-sm">Telefone: (11) 1234-5678</p>
            <p className="text-sm">Email: contato@foodeats.com.br</p>
            <p className="text-sm">Endereço: Rua das Delícias, 123 - São Paulo, SP</p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-sm">© 2025 FoodEats. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
