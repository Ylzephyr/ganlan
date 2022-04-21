import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent() {

    const [showManu, setShowManu] = React.useState(false);

    const [showLi, setShowLi] = React.useState([{
        name: "Home",
        to: '/',
        index: 0,
        isshow: false
    }, {
        name: "Manufactrues",
        to: '/manufactrues',
        index: 1,
        isshow: false
    }, {
        name: "About us",
        to: '/about',
        index: 2,
        isshow: false
    }, {
        name: "Contact",
        to: '/contact',
        index: 3,
        isshow: false
    }])

    const handleMouseLiMove =(event: React.MouseEvent)=>{

    }

    const handleMouseManuMove = (event: React.MouseEvent) => {
        setShowManu(true);
    }
    const handleMouseLeave = (event: React.MouseEvent) => {
        setShowManu(false);
    }
    React.useEffect(() => {
        setShowManu(false);
    }, [])

    return (
        <div style={{
            backgroundColor: "rgba(83, 83, 81, .8)",
            height: "50px",
            paddingLeft: "150px"
        }}>
            <ul style={{ padding: "0", margin: "0" }}>

                <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px" }} onMouseMove={handleMouseLiMove}>
                    <Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link>
                </li>

                <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px", position: "relative"}} onMouseMove={handleMouseLiMove}>
                    <Link to="/manufactrues" style={{ textDecoration: 'none', color: "white"}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>Manufactrues</Link>
                    <div style={{ display: showManu == true ? 'block' : 'none', position: 'absolute', backgroundColor: 'rgb(255,255,255)', color: '#666666' ,width:'200px'}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>
                        {/* <div style={{display:"inline-block"}}>Manufactrues </div> */}
                        <div>Texas Instruments</div>
                        <div>Analog Devices</div>
                        <div>Microchip</div>
                        <div>Infineon Techon</div>
                        <div>NXP</div>
                    </div>
                </li>

                <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px" }} onMouseMove={handleMouseLiMove}>
                    <Link to="/about" style={{ textDecoration: 'none', color: "white" }}>About us</Link>
                </li>

                <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px" }} onMouseMove={handleMouseLiMove}>
                    <Link to="/contact" style={{ textDecoration: 'none', color: "white" }}>Contact</Link>
                </li>

                {/* {liItem} */}

            </ul>
        </div>
    )
}

// const nav = {}
// const nav_ul = {}
// const nav_ul_li = {}
// const nav_ul_li_manufactrues = {}

// const liItem = showLi.map((item, index) => {
//     return (
//         <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px", position: "relative" }}>
//             <Link to={item.to} style={{ textDecoration: 'none', color: "white" }}>{item.name}
                
//             </Link>
//         </li>
//     )
// })

// const manuList= () => {
//     return(
//         <div style={{ display: showManu == true ? 'block' : 'none', position: 'absolute', backgroundColor: 'rgb(255,255,255)', width: '200px', color: '#666666' }} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>
//         <div>Texas Instruments</div>
//         <div>Analog Devices</div>
//         <div>Microchip</div>
//         <div>Infineon Techon</div>
//         <div>NXP</div>
//     </div>
//     )
// }