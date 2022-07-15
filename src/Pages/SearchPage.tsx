import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

interface ShowModalProps {
    text: string;
    children: React.ReactNode | React.ReactNode[];
}

interface inventory {
    Updated: string,
    id: number,
    part_number: string,
    manufactory: string,
    produce_date: string,
    package: string,
    quantity: string,
}
type TInventory = inventory[];

export default function SearchPage() {
    // 获取URL的params
    const [searchParams, setSearchParams] = useSearchParams();
    const manufactory = searchParams.get('manufacture');
    const partNo = searchParams.get('part_number');

    // 服务端数据State
    const [inventoryData, setInventoryData] = React.useState<TInventory>([]);

    React.useEffect(() => {
        axios.post('http://localhost:9001/api/inventory/search', {
            manufactory: manufactory,
            part_number: partNo
        }).then(response => {
            inventoryData.push(...response.data.data)
            console.log(inventoryData)
        })
    }, [manufactory, partNo])

    return (
        <div style={{ paddingTop: "50px", paddingLeft: "200px", paddingRight: "200px" }}>
            <div>
                <div style={{ fontSize: "36px" }}>Results for: Texas Instruments</div>
                <div style={{ fontSize: "18px", color: "#999999", marginTop: "10px", marginBottom: "40px" }}>Choose a Texas Instruments line item or refine your search within Texas Instruments part.</div>
            </div>
            <div>
                <div>
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
                        {inventoryData ? inventoryData.map(item => {
                            return (
                                <tr style={{ textAlign: "center", height: "45px" }} key={item.id}>
                                    <td style={{ textAlign: "left", paddingLeft: "30px" }}>{item.part_number}</td>
                                    <td>{item.manufactory}</td>
                                    <td>{item.produce_date}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.package}</td>
                                    <td>{item.Updated}</td>
                                    <td></td>
                                </tr>
                            )
                        }) : <tr>
                            <td>has no data</td>
                        </tr>
                        }
                    </table>
                    {/* <GanlanTable></GanlanTable> */}
                </div>
                {/* <div>123456...9 next</div> */}
            </div>
            <div style={{ fontSize: "18px", color: "#999999", marginTop: "40px", marginBottom: "50px" }}>
                If you don't find the model you want, please contact us, we can provide the service of purchasing in the Chinese market.
            </div>
        </div>
    )
}

const table_head = {
    height: "40px",
    background: "#0078A9",
    color: "#FCD227",
}