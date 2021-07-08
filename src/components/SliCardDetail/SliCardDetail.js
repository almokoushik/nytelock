import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from "../../fakeData.json"
import img1 from "../../images/hbo.svg"
import img2 from "../../images/ibm.png"
import img3 from "../../images/nasa.png"
const SliCardDetail = (props) => {
    const[data,setData]=useState({})

    useEffect(()=>{
        setData(fakeData.data[parseInt(props.props)-1])
    },[props.props])
    return (
        <div className="row d-flex justify-content-between align-items-center text-start m-5 p-5">
            <div className="col-md-6 col-sm-12 col-lg-6">
                <h1>{data.title}</h1>
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>

            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 my-5 row d-flex justify-content-center align-items-center">
                {/* <img src={img1} alt="Logo Sample" style={{width:"30%"}}></img>
                <img src={img2} alt="Logo Sample" style={{ width: "40%" }}></img>
                <img src={img3} alt="Logo Sample" style={{ width: "30%" }}></img> */}
                {
                   data.logos&& data.logos.map(i=>{
                        return(
                            <div className="col col-md-4 col-lg-4 col-sm-4"> <img src={i.img} alt="Logo Sample" className="w-100"></img></div>
                        )
                    
                })
            }

            </div>
        </div>
    );
};

export default SliCardDetail;