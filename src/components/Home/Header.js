import { Typewriter } from "react-simple-typewriter";
import imgMain from "../../assets/img/header-main.jpg";
import { Link } from "react-router-dom";

const listProducts = [
  { product: 'Crean estrategias digitales innovadoras' },
  { product: 'Desarrollan soluciones personalizadas' },
  { product: 'Optimizan la presencia en redes sociales' },
];

const Header = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="relative min-h-screen">
        {/* Fondo con imagen transparente */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src={imgMain}
            alt="Fondo transparente"
            className="object-cover w-full h-full max-w-screen-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 pt-40">
          <section className="mx-auto max-w-6xl">
            <div className="grid items-center grid-cols-1 gap-12">
              {/* Columna de texto */}
              <div className="lg:order-1">
                <h1 className="pt-7 text-xl font-bold text-black lg:mt-8 sm:text-2xl xl:text-4xl font-playfair">
                  Para aquellos que{" "}
                  <span className="inline-block bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 min-h-[120px] sm:min-h-[96px] md:min-h-[72px] lg:min-h-[96px] w-full relative">
                    <div className="absolute top-0 left-0 w-full">
                      <Typewriter
                        words={[
                          'crean estrategias digitales innovadoras',
                          'diseñan campañas que marcan tendencia',
                          'desarrollan soluciones personalizadas',
                          'optimizan la presencia en redes sociales',
                          'transforman ideas en resultados concretos',
                          'potencian marcas con creatividad disruptiva'
                        ]}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={40}
                        deleteSpeed={30}
                        delaySpeed={1500}
                        onType={(count) => {
                          const typewriterElement = document.querySelector('.Typewriter');
                          if(typewriterElement) {
                            typewriterElement.style.whiteSpace = 'nowrap';
                          }
                        }}
                      />
                    </div>
                  </span>
                </h1>

                {/* Lista de productos */}
                <div className="flex flex-col mt-3 space-y-3 sm:mt-2 min-h-[180px] sm:min-h-[144px] md:min-h-[120px]">
                  {listProducts.map((link, index) => (
                    <Link
                      key={index}
                      className="p-2 text-lg font-medium transition-all duration-300 text-gray-700 hover:text-orange-600 hover:pl-4 whitespace-nowrap"
                    >
                      ✓ {link.product}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Espacio para alineación en grid */}
              <div className="lg:order-2" aria-hidden="true" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Header;
