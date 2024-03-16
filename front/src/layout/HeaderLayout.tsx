import logoSvg from "/logo.svg";

function HeaderLayout() {
  return (
    <header>
      <a href="#">
        <img src={logoSvg} alt="Logo" />
        <span>Gestion Stock</span>
      </a>
    </header>
  );
}

export default HeaderLayout;
