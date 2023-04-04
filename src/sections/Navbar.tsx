import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigationRoutes = [
    { name: "Search", route: "/search" },
    { name: "Compare", route: "/compare" },
    { name: "Pokemon", route: "/pokemon" },
    { name: "MyList", route: "/list" },
    { name: "About", route: "/about" },
  ];

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map((route) => (
            <li key={route.name}>
              <Link to={route.route}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
