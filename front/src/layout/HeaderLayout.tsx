import logoSvg from "/logo.svg";

function HeaderLayout() {
  return (
    <header className="flex h-12 bg-gray-100 px-2">
      <a href="#" className=" items-center gap-2 flex hover:underline">
        <img src={logoSvg} alt="Logo" className="h-10" />
        <span className="font-bold text-xl">Gestion Stock</span>
      </a>
    </header>
  );
}

export default HeaderLayout;
