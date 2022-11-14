import axios from "axios";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import whatsapp from "@/assets/msg.png";
import skype from "@/assets/skype1.png";

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
    const currentPage = Number(searchParams.get('page'));

    const navigate = useNavigate();

    // 服务端数据State  
    //inventoryData 当前表格数据
    //inventoryCount总条数 
    //inventoryPage 总页数 
    //inventoryCurrentPage 当前页码
    const [inventoryData, setInventoryData] = React.useState<TInventory>([]);
    const [inventoryCount, setInventoryCount] = React.useState(0);
    const [inventoryPage, setInventoryPage] = React.useState(0);
    const [inventoryCurrentPage, setInventoryCurrentPage] = React.useState<number>();

    const inventoryPageBlock = () => {
        const r = [];
        for (let i = 1; i < inventoryPage + 1; i++) {
            r.push(
                <span style={currentPage == i ? { 
                    backgroundColor: "#0078A9" ,
                    color:"#ffffff",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#0078A9",
                    width: "25px", height: "30px",
                    display: "inline-block",
                    lineHeight: "30px",
                    textAlign: "center",
                    fontSize: "18px",
                    marginRight: "5px",
                    cursor: "pointer",
                } : {
                    color: "#0078A9",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#0078A9",
                    width: "25px", height: "30px",
                    display: "inline-block",
                    lineHeight: "30px",
                    textAlign: "center",
                    fontSize: "18px", 
                    marginRight: "5px",
                    cursor: "pointer",
                }}
                    onClick={async () => {
                        navigate({
                            search: `manufacture=${manufactory}&part_number=${partNo}&page=${i}`
                        })
                        setInventoryCurrentPage(i)
                    }}
                    key={i}>
                    {i}
                </span>
            )
        }
        return r;
    }

    React.useEffect(() => {

        const fetchData = async () => {
            axios.post('http://localhost:9001/api/inventory/search', {
                manufactory: manufactory,
                part_number: partNo,
                page: currentPage
            }).then(response => {
                setInventoryData(response.data.data.rows)
                setInventoryCount(response.data.data.count)
                setInventoryPage(Math.ceil(response.data.data.count / 10))

                setInventoryCurrentPage(Number(currentPage))
            })
        }

        fetchData();
        return () => {
        }
    }, [manufactory, partNo, currentPage])

    return (
        <div style={{ paddingTop: "50px", paddingLeft: "400px" }}>
            <div>
                <div style={{ fontSize: "36px" }}>Results for: {manufactory ? manufactory : partNo}</div>
                <div style={{ fontSize: "18px", color: "#999999", marginTop: "10px", marginBottom: "40px" }}>Choose a Texas Instruments line item or refine your search within Texas Instruments part.</div>
            </div>
            <div>
                <div>
                    <table style={{ borderSpacing: 0 }}>
                        <thead>
                            <tr style={table_head}>
                                <th style={{ width: "200px", textAlign: "left", paddingLeft: "30px" }}>Part No.</th>
                                <th style={{ width: "150px" }}>Manufactory</th>
                                <th style={{ width: "100px" }}>D/C</th>
                                <th style={{ width: "100px" }}>Qty</th>
                                <th style={{ width: "120px" }}>Package</th>
                                <th style={{ width: "120px" }}>Updated</th>
                                <th style={{ width: "120px" }}>Contact us</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryData ? inventoryData.map(item => {
                                return (
                                    <tr style={{ textAlign: "center", height: "45px" }} key={item.id}>
                                        <td style={{ textAlign: "left", paddingLeft: "30px" }}>{item.part_number}</td>
                                        <td>{item.manufactory}</td>
                                        <td>{item.produce_date}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.package}</td>
                                        <td>{item.Updated}</td>
                                        <td>
                                            <img src={whatsapp} style={{ height: "25px", width: "25px", marginRight: '2px' }} />
                                            <img src={skype} style={{ height: "25px", width: "25px" }} />
                                        </td>
                                    </tr>
                                )
                            }) : <tr>
                                <td>has no data</td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: "50px" }}>
                    {inventoryPageBlock()}
                    {inventoryPage > 1 ? <span style={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#0078A9",
                        width: "50px", height: "30px",
                        display: "inline-block",
                        lineHeight: "30px",
                        textAlign: "center",
                        fontSize: "18px", color: "#0078A9",
                        marginRight: "5px",
                        cursor: "pointer"
                    }}
                        onClick={() => {
                            navigate({
                                search: `manufacture=${manufactory}&part_number=${partNo}&page=${Number(currentPage) + 1}`
                            })
                        }}>
                        Next</span> : <></>}
                </div>
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