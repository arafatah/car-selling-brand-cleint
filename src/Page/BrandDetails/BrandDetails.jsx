import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../Home/Navbar/Navbar";
import BrandDetail from "../BrandDetail/BrandDetail";

const BrandDetails = () => {
    const { cards } = useContext(AuthContext);
    const [names, setNames] = useState([]); 

    useEffect(() => {
        fetch('https://back-end-sand-tau.vercel.app/cars')
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {
                names.map(mainName => <BrandDetail mainName={mainName} key={mainName.name}></BrandDetail>)
            }

            </div>
        </div>
    );
};

export default BrandDetails;
