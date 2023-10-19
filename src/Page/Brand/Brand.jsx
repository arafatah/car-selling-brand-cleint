import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Brand = ({ brand }) => {

  const { image, name } = brand;
  const {setCards} = useContext(AuthContext);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl object-cover w-80 h-80"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions">
            <Link onClick={() => setCards(name)} to="/brandDetails">
            <button className="btn btn-primary">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
