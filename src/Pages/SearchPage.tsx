import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    let manufacture = searchParams.get('manufacture');
    let partNo = searchParams.get('part_no');

    React.useEffect(() => {

    }, [])

    return (
        <div style={{ paddingTop: "50px", paddingLeft: "200px", paddingRight: "200px" }}>
            <div>
                <div style={{ fontSize: "36px" }}>Results for: Texas Instruments</div>
                <div style={{ fontSize: "18px", color: "#999999", marginTop: "10px", marginBottom: "40px" }}>Choose a Texas Instruments line item or refine your search within Texas Instruments part.</div>
            </div>
            <div>
                <div></div>
                <div>123456...9 next</div>
            </div>
            <div style={{ fontSize: "18px", color: "#999999",marginTop: "40px", marginBottom: "50px" }}>
                If you don't find the model you want, please contact us, we can provide the service of purchasing in the Chinese market.
            </div>
        </div>
    )
}