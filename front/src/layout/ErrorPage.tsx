import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HeaderLayout />
      <div>Error Page</div>
      <FooterLayout />
    </div>
  );
}

export default ErrorPage;
