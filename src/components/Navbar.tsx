import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-violet-800 backdrop-blur-lg bg-opacity-50 fixed flex items-center w-full h-[10vh] z-50">
      <div className="container">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
