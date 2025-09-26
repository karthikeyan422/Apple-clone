
//Section components

import Iphone from "../assets/images/phone.jpg"
import Airpods from "../assets/images/airpods.jpg"


const Product = [
    {
        id: "card1",
        name: "iphone 17Pro",
        image: Iphone,
        description: "Magichr omatic",
        Button: "Learn more",
        button: "Buy"

    },

    {
        id: "card2",
        name: "AirPods Pro 3",
        image: Airpods,
        description: "The world’s best bass.",
        Button: "Learn more",
        button: "Buy"

    },
  

]







function Productcard({ props }) {

    return (

        <div>
            <img src={props.image} alt={props.image} className="card-img" style={{ textAlign:"center",overflow:"hidden", position: "relative", margin: "1%", borderRadius: "12px", width: "100%", objectFit: "cover", height: "80vh", }} />
            <h1 style={{ fontWeight: "bold", fontSize: "2.2rem", position: "absolute", marginLeft: "19%", display: "flex", justifyContent: "space-between", alignItems: "center", top: "265%", }}>{props.name}</h1>
            <p style={{ font: "initial", position: "absolute", marginLeft:"21%", top:"272%" }}>{props.description}</p>
            <button className="mr-14 border rounded-full p-2 bg-blue-600 text-white" style={{marginLeft:"20%", top:"277%", position:"absolute",}}>{props.Button}</button>
            <button className="border rounded-full p-2 bg-white text-blue-600 border-blue-600" style={{top:"277%", position:"absolute", marginLeft:"28%",}}>{props.button}</button>

        </div>
    );



}




function ProductList() {
    return (
        <div className="grid grid-cols-2 mt-3 md:grid-cols-2 justify-between gap-3  mr-4">
            {Product.map(item => (
                <Productcard key={item.id} props={item} />

            ))}
        </div>
    );
}


export default ProductList;
