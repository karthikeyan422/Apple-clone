import Appleimage from "../assets/images/iapple.jpg"



// Image1 components 


function Image1() {

    return (
        <div className="mt-5">
            <img src={Appleimage} alt="Appleclone" style={{ width: "100vw", height: "80vh", position: "relative", top: "10%" }} />

            <div style={{ fontSize: "2.9rem", fontWeight: "bold", position: "absolute", marginLeft: "40vw", textAlign: "center", top: "95%" }}>
                <h1>iphone Air</h1>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "lighter" }}>The thinnest iphone ever.</h4>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "lighter" }}>With the power of pro inside.</h4>

            </div>
            <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "41vw", top: "116%", display: "flex", columnGap: "2rem", backgroundColor: "pink", borderRadius: "15px", color: "white" }}>
                <button>Learn more</button>

            </div>
            <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "50vw", top: "116%", display: "flex", columnGap: "2rem", backgroundColor: "white", borderRadius: "15px", color: "black", border: "solid", borderColor: "skyblue" }}>

                <button>Buy now</button>
            </div>
        </div>

    )
}

export default Image1