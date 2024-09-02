const Navbar = () => {
  return (
    <nav className="flex justify-between border-b-2 border-neutral-400 py-4 lg:py-8">
      <div className="flex justify-between py-4">
        <div className="logo">Bari.dev</div>
      </div>

      <ul className="hidden md:flex justify-end items-center gap-8">
        <li>About Me</li>
        <li>Works</li>
        <li>Journey</li>
        <li>Contact</li>
      </ul>

      <div className="flex md:hidden items-center ">Menu </div>
    </nav>
  );
};

export default Navbar;
