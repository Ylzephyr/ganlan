import React from "react"
import bannerImg from '@/assets/banner.png';

export default function IndexPage() {
    return (
        <div style={index}>
            <div style={index_banner}></div>
            {/* <div style={{ textAlign: 'center' }}> */}
            <img src={bannerImg} style={{}}/>
            <div>
                <div style={index_txt}>THE POPULAR PRODUCTS</div>
                {/* </div> */}
                {/* 老板改的代码
                <div style={index_list}>
                    <div style={index_list_item}></div>
                    <div style={index_list_item}></div>
                    <div style={index_list_item}></div>
                    <div style={index_list_item}></div>
                </div> */}

                <div style={index_pop}>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                    <span style={{ 'marginRight': '20px' }}>TLV2381IDR</span>
                </div>

                <div style={{'textAlign':'right','marginRight':'200px','marginTop':'50px','marginBottom':'50px'}}>
                    MORE...
                </div>
            </div>
        </div>
    )
}

const index = {}
const index_banner = {

}
const index_txt = {
    'fontSize': '26px',
    'marginTop': '30px',
    'marginBottom': '50px',
    'marginLeft': '200px'
}
const index_pop = {
    'marginLeft': '250px'
}
// 老板改的代码
// const index_list = {
//     paddingLeft: '300px',
//     paddingRight: '300px',
//     'display': 'flex',
//     'FlexDirection ': 'row',
//     'justifyContent': 'space-between',
//     'alignItems': 'center',
//     'flex-wrap': 'wrap',
// }
// const index_list_item = {
//     backgroundColor: '#999',
//     height: '350px',
//     width: '300px',
//     marginBottom: '50px'
// }