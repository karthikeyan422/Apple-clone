import Appleimage from "../assets/images/apple.jss.jpg"


// Image components

function Image() {

  return (
    <div>
      <img src={Appleimage} alt="Appleclone" style={{ width: "100vw", height: "80vh", position: "relative", objectFit: "cover" }} />

      <div style={{ top: "15%", fontSize: "2.5rem", fontWeight: "bold", position: "absolute", marginLeft: "42vw", textAlign: "center" }}>
        <h1>iphone 16 pro</h1>
        <h4 style={{ fontSize:"1.8rem"}}>All out Pro</h4>
      </div>
      <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "44vw", top: "32%", display: "flex", columnGap: "2rem", backgroundColor: "pink",borderRadius:"15px",color:"white" }}>
        <button>Learn more</button>

      </div>
      <div style={{ padding: "7px", fontSize: "1.2rem", position: "absolute", marginLeft: "52vw", top: "32%", display: "flex", columnGap: "2rem", backgroundColor: "white", borderRadius:"15px",color:"black",borderColor: "pink",border:"solid" }}>

        <button>Buy now</button>
      </div>
    </div>

  )
}

export default Image;