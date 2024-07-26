import Title from "../atoms/Title";
import InteractiveImage from "../molecules/InteractiveImage";
import mysql from "../../data/mysql";

function Nav() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="mb-8 text-5xl">
        <Title text="El estilo del café desde 1950" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {
          mysql.ImagenesNav.map(nav => (
            <a href={nav.href} key={nav.id} className="flex flex-col items-center space-y-4">
              <InteractiveImage image={nav.image} name={nav.name} />
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default Nav;