
import Watch from "../assets/images/watch.jpg"
import Sewatch from "../assets/images/iwatch.js.jpg"



const Product = [

    {

        id: "card3",
        name: "i WATCH SERICE",
        image: Watch,
        description: "The ultimate watch for a healthy life.",
        Button: "Learn more",
        button: "Buy"
    },

    {
        id: "card4",
        name: "i WATCH SERICE 3",
        image: Sewatch,
        description: "The Walk it, Talk it, Track it, Love it.",
        Button: "Learn more",
        button: "Buy"
        


    },


]







function Productcard({ props }) {

    return (

        <div>
            <img src={props.image} alt={props.image} className="card-img" style={{ textAlign: "center", overflow: "hidden", position: "relative", margin: "1%", borderRadius: "12px", width: "100%", objectFit: "cover", height: "80vh", }} />
            <h1 className="text" style={{ top: "350%", fontWeight: "bold", fontSize: "2.2rem", position: "absolute", marginLeft: "16%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>{props.name}</h1>
            <p style={{ font: "initial", position: "absolute", marginLeft: "17%", top: "357%" }}>{props.description}</p>
             <button className="mr-14 border rounded-full p-2 bg-blue-600 text-white" style={{marginLeft:"19%", top:"363%", position:"absolute",}}>{props.Button}</button>
            <button className="border rounded-full p-2 bg-white text-blue-600 border-blue-600" style={{top:"363%", position:"absolute", marginLeft:"27%",}}>{props.button}</button>

        </div>
    );



}




function ProductListtwo() {
    return (
        <div className="grid grid-cols-2 mt-3 md:grid-cols-2 justify-between gap-3  mr-4">
            {Product.map(item => (
                <Productcard key={item.id} props={item} />

            ))}
        </div>
    );
}


export default ProductListtwo;
