import React from "react"

export default function AboutPage() {
    return (
        <div style={about}>
            <div style={about_title}>About Us</div>
            <div style={about_box}>
                <div style={about_box_pho}>

                </div>
                <div style={about_box_txt}>
                    Since its establishment in 2014 ,E-Top International Co., Ltd. has been committed to serving traders in the electronic component trade industry. It has rich experience in electronic product sales. In line with the purpose of "reputation-based", it provides high-quality products, reasonable prices, sufficient and stable supply of goods and superior after-sales service, and establishes a friendly relationship of mutual benefit with customers. We also provide IC order distribution service for small and medium-sized enterprises, and wholeheartedly look for unpopular IC components for customers. If you need them, please contact us through QQ WhatsApp, and we will provide the best service!
                </div>
            </div>
        </div>
    )
}

const about = {
    'paddingLeft': '400px',
    'paddingRight': '400px',
    'paddingTop': '20px',
    'marginBottom':'50px'
    
}
const about_title = {
    'color': '#13709A',
    'fontSize': '36px'
}
const about_box = {
    'paddingLeft': '30px',
    'paddingRight': '30px',
    'paddingTop': '30px',
    'display':'flex',
    'FlexDirection ':'row',
    'justifyContent':'space-between',
    'alignItems': 'center'
}
const about_box_pho = {
    'width':'500px',
    'height':'320px',
    'background':'yellow',
}
const about_box_txt = {
    'width':'500px',
}