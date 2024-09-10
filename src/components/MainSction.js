import React from 'react'
import { AiOutlinePicture } from "react-icons/ai";
const MainSction = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 box'>
                    <div className='logo'>
                        <AiOutlinePicture />
                    </div>
                    <h3>start with one step</h3>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 box'>
                    <div className='logo'>
                        <AiOutlinePicture />
                    </div>
                    <h3>start with one step</h3>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

export default MainSction
