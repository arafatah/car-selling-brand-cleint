import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../Home/Navbar/Navbar";
import BrandDetail from "../BrandDetail/BrandDetail";

const BrandDetails = () => {
    const { cards } = useContext(AuthContext);
    const [names, setNames] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                const filteredCards = data.filter(card => cards.includes(card.brandName));
                setNames(filteredCards);
            });
    }, [cards]);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            {
                names.map(mainName => <BrandDetail mainName={mainName} key={mainName.name}></BrandDetail>)
            }
        </div>
    );
};

export default BrandDetails;
