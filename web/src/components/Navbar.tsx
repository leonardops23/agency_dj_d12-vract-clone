import ButtonLink from "./ui/BootonLink";
import LinksUnderlineEffect from "./ui/LinksUnderlineEffect";

const data: string[] = [
  "Home",
  "Casos",
  "Servicios",
  "Carreras",
  "Blog",
  "About Us",
  "Contact Us",
]

const Navbar = () => {
  return (
    <nav className="pt-4 pb-4 mx-auto">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8">
        <img
          src="/koopeDev-mainlogo.png"
          alt=""
          width={150}
          height={150}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <ul className="flex gap-6">
          {data.map((item, index) => (
            <li
              key={index}
            >
              <LinksUnderlineEffect text={item} />
            </li>
          ))}
          <ButtonLink text="Hire Us" href="/" />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
