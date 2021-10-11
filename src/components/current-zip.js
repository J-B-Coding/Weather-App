import '../index.css';
import React, { useState } from "react";


const currentZipData = {
    zip_code: ''
}

const CurrentZip = () => {
    const [ zipData, setZipData ] = useState(currentZipData)

    const onSubmit = evt => {
        evt.preventDefault()
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        setZipData({...zipData, [name]:value});
        console.log(zipData)
    };

    return(
        <div className='currentZipDiv'>
            <h1 className='currentZipHeader'> J {'&'} B Weather App </h1>
            <h3 className='currentZipTitle'> Enter Your Current Zip Code </h3>
            <form className='currentZipForm' onSubmit={onSubmit}>
                <input
                    className='currentZipInput'
                    type='text'
                    name='zip_code'
                    placeholder='Zip Code'
                    value={zipData.zip_code}
                    onChange={onChange}
                />
                <button id='enterZip'>Enter Zip</button>
            </form>
        </div>
    )
};

export default CurrentZip

