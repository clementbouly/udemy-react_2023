import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header
      className="mb-8 mt-8 flex flex-col items-center 
	sm:mb-16
	"
    >
      <img
        src={logo}
        alt="A canvas"
        className="hoverEffect mb-8 w-40 cursor-pointer object-contain transition-all duration-500 "
      />
      <h1
        className="
	 	m-0 text-center font-pacifico text-2xl font-semibold uppercase  tracking-widest text-[#9a3412] hover:underline sm:text-3xl md:text-4xl"
      >
        ReactArt
      </h1>
      <p className="text-center text-xl text-amber-700 ">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
