import React from "react";

export default function FootComponent() {
    return (
        <div style={foot}>

            <div style={{width:'58%',paddingLeft:'300px'}}>
                <div className="foot_left_logo" >logo</div>
                <div style={foot_left_text}>
                    ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex ttexttex
                </div>
            </div>
            <div style={{width:'40%'}}>
                <div>
                    connect with us
                </div>
                <div>
                    5 icons
                </div>
            </div>

        </div>
    )
}

const foot = {
    backgroundColor: '#999999',
    height: '300px',
    display: 'flex',
    'FlexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
    'FlexWrap': 'nowrap',
    color: '#E2E2E2',
}


const foot_left_text = {
}
const foot_right ={
    'Float' :'left'
}