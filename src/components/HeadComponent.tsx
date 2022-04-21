import React from "react";
import headbg from '@/assets/headbg.png';

export default function HeadComponent() {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "150px", paddingLeft: "200px", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div>
                    logo
                </div>
                <div style={{ marginLeft: "10px", marginRight: "100px" }}>
                    <div>e-top</div>
                    <div>international</div>
                </div>

                <input placeholder=" search... " style={{width:"300px",height:"45px",paddingLeft:"10px"}}/>

            </div>

            <div>
                <img src={headbg} style={{ height: "150px", width: "789px" }} />
            </div>
        </div>
    )
}