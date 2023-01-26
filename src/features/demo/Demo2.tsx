// import {renderImagesGalleryExample} from "../../components/ImagesGallery";
// import {HeaderTG} from "../mainScreen/components/HeaderTG";
// import {FooterTG} from "../mainScreen/components/FooterTG";
import {ContactUs} from "../../components/ContactUs";
import '../../components/BootstrapExamples.css';
import React from 'react';

// const renderContactUs = () => {
//     return (
//         <ContactUs
//             onSendClick={(data: {name: string, phone: string, email: string}) => {
//                 window.alert(`Send click with name: ${data.name}, phone: ${data.phone}, email: ${data.email}.`)
//             }}
//         />
//     );
// }

function Demo() {
    return (
        <div className="Container">
            {/*<HeaderTG/>*/}
            {/*{renderImagesGalleryExample()}*/}
            {/*{renderContactUs()}*/}
            {/*<FooterTG/>*/}
        </div>
    );
}

export default Demo;
