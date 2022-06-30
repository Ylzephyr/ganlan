import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent() {

    const [showManu, setShowManu] = React.useState(false);
    const [showLight,setShowLight] = React.useState(0);

    const showLi = [{
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
    }]
    // const liItems = showLi.map((item, index) => {
    //     return (
    //     <li style={{ float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px" }} onMouseMove={handleMouseLiMove}>
           
    //         {item.index==1? 
    //                     <div>
    //                     <div style={{ textDecoration: 'none', color: "white"}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>Manufactrues</div>
    //                     <div style={{ display: showManu == true ? 'block' : 'none', position: 'absolute', backgroundColor: 'rgb(255,255,255)', color: '#666666' ,width:'200px'}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>
    //                         <div>Texas Instruments</div>
    //                         <div>Analog Devices</div>
    //                         <div>Microchip</div>
    //                         <div>Infineon Techon</div>
    //                         <div>NXP</div>
    //                     </div>
    //                     </div>:
    //                     <Link to={item.to} style={{ textDecoration: 'none', color: "white" }}>{item.name}</Link>
    //         }
    //     </li>
    //     )
    // })

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
        setShowLight(0)
    }, [])

    return (
        <div style={{
            backgroundColor: "rgba(83, 83, 81, .8)",
            height: "50px",
            paddingLeft: "150px"
        }}>
            <ul style={{ padding: "0", margin: "0" }} onMouseLeave={()=>setShowLight(0)}>

                <li style={{ backgroundColor :showLight==1?'rgb(255,255,255)':'',float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px"}} onMouseMove={()=>setShowLight(1)}>
                    <Link to="/" style={{ textDecoration: 'none', color: showLight==1?'#666666':'white'}}>Home</Link>
                </li>

                <li style={{backgroundColor :showLight==2?'rgb(255,255,255)':'', float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px", position: "relative"}} onMouseMove={()=>setShowLight(2)}>
                    
                    <div style={{ textDecoration: 'none', color: showLight==2?'#666666':'white'}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>Manufactrues</div>
                    <div style={{ display: showManu == true ? 'block' : 'none', position: 'absolute', backgroundColor: 'rgb(255,255,255)', color: '#666666' ,width:'200px'}} onMouseMove={handleMouseManuMove} onMouseLeave={handleMouseLeave}>
                        {/* <div style={{display:"inline-block"}}>Manufactrues </div> */}
                        <div>Texas Instruments</div>
                        <div>Analog Devices</div>
                        <div>Microchip</div>
                        <div>Infineon Techon</div>
                        <div>NXP</div>
                    </div>
                </li>

                <li style={{backgroundColor :showLight==3?'rgb(255,255,255)':'', float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px" }} onMouseMove={()=>setShowLight(3)}>
                    <Link to="/about" style={{ textDecoration: 'none', color: showLight==3?'#666666':'white' }}>About us</Link>
                </li>

                <li style={{backgroundColor :showLight==4?'rgb(255,255,255)':'', float: "left", listStyle: "none", lineHeight: "50px", textAlign: "center", width: "200px"}} onMouseMove={()=>setShowLight(4)}>
                    <Link to="/contact" style={{ textDecoration: 'none', color: showLight==4?'#666666':'white' }}>Contact</Link>
                </li>

                {/* { liItems }  */}

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