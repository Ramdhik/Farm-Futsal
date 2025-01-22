import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <header className="w-full fixed">
      <nav className="w-11/12 mx-auto flex justify-between py-7 px-2 font-bold text-white">
        <div className="w-64">
          <ul className="flex justify-between">
            <li>About US</li>
            <li>Facilities</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-64 flex justify-center">Logo</div>
        <div className="w-64 flex justify-end">
          <Button className="rounded-full py-5 px-8 bg-white text-black font-bold">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
