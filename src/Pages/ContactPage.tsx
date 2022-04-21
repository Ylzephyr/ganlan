import React from "react"

export default function ContactPage() {
    return (
        <div style={contact}>
            <div style={contact_title}>Contact</div>
            <div style={{ paddingLeft: '35px', paddingRight: '35px', paddingTop: '10px' }}>
                <div style={contact_box}>
                    <div>First & Last Name</div>
                    <input style={contact_box_input} />
                    <div>Email</div>
                    <input style={contact_box_input} />
                    <div>Required IC Model</div>
                    <input style={contact_box_input} />
                    <div>Remark</div>
                    <textarea style={contact_box_txtarea} />
                    <div style={{position:'relative'}}><div style={contact_box_btn} >Submit</div></div>
                </div>
                <div style={contact_foot}>
                    If you are urgent, you can find us through the contact information at the bottom of the page, and we will reply as soon as possible.
                </div>
            </div>
        </div>
    )
}

const contact = {
    'paddingLeft': '400px',
    'paddingRight': '400px',
    'paddingTop': '20px',
}
const contact_title = {
    'color': '#13709A',
    'fontSize': '36px'
}
const contact_box = {
    'paddingLeft': '30px',
    'paddingRight': '30px',
    'paddingTop': '30px',
    'paddingBottom': '30px',
    'borderWidth': '1px',
    'borderStyle': 'solid'
}
const contact_box_input = {
    'marginTop': '10px',
    'marginBottom': '20px',
    'width': '500px',
    'height': '40px'
}
const contact_box_txtarea = {
    'marginTop': '10px',
    'marginBottom': '50px',
    'width': '800px',
    'height': '100px'
}

const contact_box_btn = {
    'height': '50px',
    'width': '120px',
    'backgroundColor': '#13709A',
    'color': '#F29500',
    'lineHeight': '50px',
    'borderRadius': '15px',
    'text-align':'center',
    'Position':'absolute',
    'left':'0',
    'right':'0',
    'top':'0',
    'bottom':'0',
    'margin':'auto'
}
const contact_foot = {
    'color': '#9E9E9E',
    'marginTop': '50px',
    'marginBottom': '80px',
    'fontSize': '18px'
}