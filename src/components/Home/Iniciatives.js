const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/01.svg',
      description: "Our digital product studio specializes in JavaScript development and ensures that our teams are always up-to-date with the latest industry standards and best practices. We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/02.svg',
      description: "We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/03.svg',
      description:
        "We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
    },
    {
        name: 'Free shipping',
        imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/01.svg',
        description: "We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
      },
      {
        name: '10-year warranty',
        imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/02.svg',
        description: "We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
      },
      {
        name: 'Exchanges',
        imageSrc: 'https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/03.svg',
        description:
          "We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.",
      },
  ]
  
  export default function Incentives() {
    return (
        <div className="bg-white relative overflow-hidden">
        {/* Imagen de fondo decorativa */}
        <div className="absolute -right-0 top-1/2 max-w-xl">
          <img 
            src="https://fireart.studio/wp-content/themes/fireart/assets/img/benefits/palm-leaf.svg" 
            alt="Decoración" 
          />
        </div>
        <div className="mx-auto px-4 lg:mx-12 max-w-full py-24 sm:px-2 sm:py-22 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none w-full">
            <div className="max-w-6xl flex gap-5">
              <h2 className="text-4xl font-bold tracking-tight text-black">
                Why should you choose Mk Agency?
              </h2>
              <p className="text-gray-900 max-w-6xl px-40 font-medium text-sm">
                Mk Agency is a boutique digital product development studio. We have 50+ JS and design experts
                on board and 6+ years of experience in building digital projects from scratch or refreshing existing ones.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 max-w-2xl">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-26 w-26" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 px-4">
                    <h3 className="text-2xl font-bold text-black">{incentive.name}</h3>
                    <p className="mt-2 text-lg text-gray-800">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  