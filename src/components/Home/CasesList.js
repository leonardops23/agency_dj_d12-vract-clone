import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CasesList = () => {
  const cases = [
    {
      id: 1,
      title: "Databox",
      categories: ["Development", "Product Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    {
      id: 2,
      title: "Otro Caso",
      categories: ["Marketing", "Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    {
      id: 1,
      title: "Databox",
      categories: ["Development", "Product Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    {
      id: 2,
      title: "Otro Caso",
      categories: ["Marketing", "Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    {
      id: 3,
      title: "Databox",
      categories: ["Development", "Product Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    {
      id: 4,
      title: "Otro Caso",
      categories: ["Marketing", "Design"],
      image: "https://fireart.studio/wp-content/themes/fireart/assets/img/cases/databox.webp"
    },
    // Agrega más casos aquí
  ];

  return(
    <div className="bg-gray-100">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Some of Our Cases</h1>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {cases.map((caseItem) => (
            <SwiperSlide key={caseItem.id} className="max-w-[400px]">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Contenedor de imagen cuadrada */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        {caseItem.categories.map((category, index) => (
                          <p key={index} className="text-sm text-gray-500">{category}</p>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW CASE
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{caseItem.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default CasesList;
