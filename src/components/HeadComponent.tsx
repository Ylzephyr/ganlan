import React, { ReactElement } from "react";
import logoBig from '@/assets/logo_big.png';
import { useNavigate } from "react-router-dom";

export default function HeadComponent() {

    const [inputValue, setInputValue] = React.useState("");
    const navigate = useNavigate();


    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const linkSearch = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            // 跳转
            navigate(`/search?manufacture=&part_number=${inputValue}&page=1`)
            setInputValue("")
        }
    }

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

                <img src={logoBig} style={{ height: "60px", width: "240px", marginRight: "90px" }} />

                <input placeholder=" search... " type="search" style={{ width: "300px", height: "45px", paddingLeft: "10px" }} value={inputValue} onChange={handleInputChange} onKeyUp={linkSearch} />

            </div>

            <div>
                {/* <img src={headbg} style={{ height: "155px", width: "789px" }} /> */}
            </div>
        </div>
    )
}