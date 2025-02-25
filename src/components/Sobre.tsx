import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div className="bg-[#400101] text-white font-sans min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#F2B705' }}>Sobre Nós</h1>

        {/* Grid para os Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          {/* Integrante 1 */}
          <div className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\bea.jpeg"
              alt="Beatriz Santina"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold" style={{ color: '#F29F05' }}>Beatriz Santina</h2>
            <p className="text-center mt-2"></p>
            <a href="https://github.com/krocodaimon" target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Integrante 2 */}
          <div className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\carol.jpeg"
              alt="Caroline Ribeiro"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold" style={{ color: '#F29F05' }}>Caroline Ribeiro</h2>
            <p className="text-center mt-2"></p>
            <a href="https://github.com/RibeiroCaroline" target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Integrante 3 */}
          <div className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\iza.jpeg"
              alt="Izabelly Gutierres Silva"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold" style={{ color: '#F29F05' }}>Izabelly Gutierres Silva</h2>
            <p className="text-center mt-2"></p>
            <a href="https://github.com/izabellygutierres" target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Integrante 4 */}
          <div className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\luan.jpeg"
              alt="Luan Oliveira"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold" style={{ color: '#F29F05' }}>Luan Oliveira</h2>
            <p className="text-center mt-2"></p>
            <a href="https://github.com/luan-tcpn" target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>


          {/* Integrante 5 */}
          <div className="bg-[#BF3604] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="public\images\lucas.jpeg"
              alt="Lucas Manhães"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold" style={{ color: '#F29F05' }}>Lucas Manhães</h2>
            <p className="text-center mt-2"></p>
            <a href="https://github.com/lucasmanhaesr" target="_blank" rel="noopener noreferrer" className="mt-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;