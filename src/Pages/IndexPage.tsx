import React from "react"

export default function IndexPage() {
    return (
        <div style={index}>
            <div style={index_banner}></div>
            <div style={{ textAlign: 'center' }}>
                <div style={index_txt}>THE POPULAR PRODUCTS</div>
            </div>
            <div style={index_list}>
                <div style={index_list_item}></div>
                <div style={index_list_item}></div>
                <div style={index_list_item}></div>
                <div style={index_list_item}></div>
            </div>
        </div>
    )
}

const index = {}
const index_banner = {
    'height': '400px',
    'width': '100%',
    'backgroundColor': '#999'
}
const index_txt = {
    'fontSize': '26px',
    'marginTop': '50px',
    'marginBottom': '50px',
}
const index_list = {
    paddingLeft: '300px',
    paddingRight: '300px',
    'display': 'flex',
    'FlexDirection ': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'flex-wrap': 'wrap',
}
const index_list_item = {
    backgroundColor: '#999',
    height: '350px',
    width: '300px',
    marginBottom: '50px'
}