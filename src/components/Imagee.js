import Appleimage from "../assets/images/iphon.js.jpg"


//Imagee components

function Image2() {


    return (
        <div className="mt-5">
            <img src={Appleimage} alt="Appleclone" style={{ width: "100vw", height: "80vh", position: "relative" }} />

            <h1 style={{ left: "20px", color: "white", top: "200%", position: "absolute", marginLeft: "12%", fontSize: "2.9rem", fontWeight: "bold" }}>iphone 17 pro</h1>
            <p style={{ color: "white", position: "absolute", top: "210%", left: "14%", fontWeight: "lighter" }}>Even more delightful.
                Even more durable.</p>
            <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "14%", top: "216%", display: "flex", backgroundColor: "orange", borderRadius: "15px", color: "white" }}>
                <button>Learn more</button>

            </div>
            <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "23%", top: "216%", display: "flex", backgroundColor: "white", borderRadius: "15px", color: "black", border: "solid", borderColor: "orange" }}>

                <button>Buy now</button>
            </div>
        </div>


    )

}



export default Image2;