import React from "react";
import logoGray from "@/assets/logo_gray.png"
import wechatPng from '@/assets/wechat.png'
import twitterPng from '@/assets/twitter.png'
import linkedln from '@/assets/linkedln.png'
import skypePng from '@/assets/skype.png'
import qqPng from '@/assets/qq.png'
import whatsappPng from '@/assets/whatsapp.png'

export default function FootComponent() {

    const iconList = [{
        name: 'Wechat',
        src: wechatPng,
    }, {
        name: 'Twitter',
        src: twitterPng
    }, {
        name: 'Linkedln',
        src: linkedln
    }, {
        name: 'Skype',
        src: skypePng
    }, {
        name: 'QQ',
        src: qqPng
    }, {
        name: 'Whatsapp',
        src: whatsappPng
    }];

    const iconItems = iconList.map((item, index) =>
        <img src={item.src} style={{ height: '40px', width: '40px' ,marginRight:'15px'}} />
    );

    return (
        <div style={foot}>

            <div style={{marginRight:'100px' }}>
                <div style={{ marginBottom :'25px'}}>
                    <img src={logoGray} style={{ height: "50px", width: "50px" }} />
                </div>
                <div style={foot_left_text}>
                    The E-TOP company operates various brand IC products and is a professional
                    integrated circuit supplier.With many years of IC experience,we have rich
                    experience in electronic product sales,the company has always been serving
                    customers with integrity-based purposes!
                </div>
            </div>
            <div style={{ height:'130px',width: '150px' }}>
                <div style={{ marginBottom :'25px'}}>
                    Connect with us
                </div>
                <div style={foot_right_icons}>
                    {iconItems}
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
    // 'justifyContent': 'center',
    // 'FlexWrap': 'nowrap',
    paddingLeft: '300px',
    paddingRight: '300px',
    color: '#E2E2E2',
}


const foot_left_text = {
}
const foot_right = {
}
const foot_right_icons = {
    // 'display':'flex',
    // 'FlexDirection': 'row',
    // 'FlexWrap': 'wrap',
    overflow:"hidden",
    height:'100px',
    width: '180px',
}