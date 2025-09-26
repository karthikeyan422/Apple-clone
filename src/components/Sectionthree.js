
import Ultra from "../assets/images/iwatch.jpg"
import Phone from "../assets/images/iphone.js.jpg"


const Product = [

    {
        id: "card5",
        name: "WATCH ULTRA 3",
        image: Ultra,
        description: "personal Beast, Ultimate Thing ",
        Button: "Learn more",
        button: "Buy"


    },

    {
        id: "card6",
        name: "Trade In Get Price",
        image: Phone,
        description: "Upgrade. Save. Or recycle it for free.",
        Button: "Learn more",
        button: "Buy",
        Buttonn: "Get Your estimate"

    },

]







function Productcard({ props }) {

    return (

        <div>
            <img src={props.image} alt={props.image} className="card-img" style={{ textAlign: "center", overflow: "hidden", position: "relative", margin: "1%", borderRadius: "12px", width: "100%", objectFit: "cover", height: "80vh", }} />
            <h1 className="text" style={{ top: "432%", color: "skyblue", fontWeight: "bold", fontSize: "2.2rem", position: "absolute", marginLeft: "17%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>{props.name}</h1>
            <p style={{ font: "initial", position: "absolute", marginLeft: "19%", top: "439%", color: "green", }}>{props.description}</p>
             <button className="mr-14 border rounded-full p-2 bg-blue-600 text-white" style={{marginLeft:"20%", top:"445%", position:"absolute",}}>{props.Button}</button>
            <button className="border rounded-full p-2 bg-white text-blue-600 border-blue-600" style={{top:"445%", position:"absolute", marginLeft:"28%",}}>{props.button}</button>
            <button className="mr-14 border rounded-full p-3 bg-black text-blue-600 border-black" style={{marginLeft:"21%", top:"454%", position:"absolute",}}>{props.Buttonn}</button>

        </div>
    );



}




function ProductListone() {
    return (
        <div className="grid grid-cols-2 mt-3 md:grid-cols-2 justify-between gap-3  mr-4">
            {Product.map(item => (
                <Productcard key={item.id} props={item} />

            ))}
        </div>
    );
}


export default ProductListone;
