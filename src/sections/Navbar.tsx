import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {

  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    { name: "Search", route: "/search" },
    { name: "Compare", route: "/compare" },
    { name: "Pokemon", route: "/pokemon" },
    { name: "MyList", route: "/list" },
    { name: "About", route: "/about" },
  ];


  useEffect(() => {
    const index = navigationRoutes.findIndex(({route}) => location.pathname.includes(route));
    ul(index);
  }, [location.pathname, navigationRoutes]);
  
  const ul = (index: number) => {
    const underlines = document.querySelectorAll<HTMLElement>(".underline");
  
    underlines.forEach((underline: HTMLElement) => {
      underline.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    });
  }
  

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
            <Link key={route.name} to={route.route}>
              {route.name}
              </Link>
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
