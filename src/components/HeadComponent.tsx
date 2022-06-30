import React from "react";
import headbg from '@/assets/headbg.png';
import logoBig from '@/assets/logo_big.png';

export default function HeadComponent() {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "150px", paddingLeft: "200px", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {/* <div>
                    logo
                </div>
                <div style={{ marginLeft: "10px", marginRight: "100px" }}>
                    <div>e-top</div>
                    <div>international</div>
                </div> */}

                <img src={logoBig} style={{ height:"60px",width:"240px",marginRight:"90px"}}/>

                <input placeholder=" search... " style={{width:"300px",height:"45px",paddingLeft:"10px"}}/>

            </div>

            <div>
                <img src={headbg} style={{ height: "155px", width: "789px" }} />
            </div>
        </div>
    )
}