import Logo from "./../../assets/logo.svg";
import Pattern from "./../../assets/bg-pattern-1.svg";
function NavBar() {
  return (
    <div className="flex justify-between items-center h-28 ">
      <img className=" h-8" src={Logo} />
      <img className="absolute -top-7 right-0 -z-10 sm:hidden" src={Pattern} />
    </div>
  );
}

export default NavBar;
