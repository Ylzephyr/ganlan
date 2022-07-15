import React from "react";

export default function GanlanTable(children?: React.ReactNode[] | React.ReactNode) {
    return (
        <table style={{ borderSpacing: 0 }}>
            <tr style={table_head}>
                <th style={{ width: "200px", textAlign: "left", paddingLeft: "30px" }}>Part No.</th>
                <th style={{ width: "150px" }}>Manufactory</th>
                <th style={{ width: "100px" }}>D/C</th>
                <th style={{ width: "100px" }}>Qty</th>
                <th style={{ width: "120px" }}>Package</th>
                <th style={{ width: "120px" }}>Updated</th>
                <th style={{ width: "120px" }}>Contact us</th>
            </tr>
        </table>
    )
}

const table_head = {
    height: "40px",
    background: "#0078A9",
    color: "#FCD227",
}