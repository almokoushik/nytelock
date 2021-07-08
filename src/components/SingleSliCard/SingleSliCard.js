import React from 'react';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./SingleCard.css"

const SingleSliCard = (props) => {
    const [isHover, setIsHover] = useState(false)
    const [logoData, setLogoData] = useContext(UserContext)
    const handleClick = (e) => {
        setLogoData(e)
    }
    const handleMouseEnter = (e) => {
        setIsHover(!isHover)
    }

    return (
        <div>
            {
                (parseInt(props.props.id) === parseInt(logoData)) ? (<div onClick={() => handleClick(props.props.id)} onMouseEnter={() => handleMouseEnter(this)} onMouseLeave={() => handleMouseEnter(this)} clickable="true" className="m-3 p-3 text-dark bg bg-white callout" style={{ border: "1px solid grey", borderRadius: "15px", backgroundColor: "#3C3C3C" }} >
                    <FormatItalicIcon fontSize="large" className="bg"></FormatItalicIcon> <br></br>
                    <h5 className="bg bg-transparent">{props.props.title}</h5>
                </div >)
                    : (isHover === true) ? (<div onClick={() => handleClick(props.props.id)} onMouseEnter={() => handleMouseEnter(this)} onMouseLeave={() => handleMouseEnter(this)} clickable="true" className="m-3 p-3 text-dark bg bg-white" style={{ border: "1px solid grey", borderRadius: "15px", backgroundColor: "#3C3C3C" }} >
                        <FormatItalicIcon fontSize="large" className="bg"></FormatItalicIcon> <br></br>
                        <h5 className="bg bg-transparent">{props.props.title}</h5>
                    </div >)
                        :
                        (<div onClick={() => handleClick(props.props.id)} onMouseEnter={() => handleMouseEnter(this)} onMouseLeave={() => handleMouseEnter(this)} clickable="true" className="m-3 p-3 text-white" style={{ border: "1px solid grey", borderRadius: "15px" }}>
                            <FormatItalicIcon fontSize="large" className=""></FormatItalicIcon> <br></br>
                            <h5 className="bg bg-transparent">{props.props.title}</h5>
                        </div>)
            }
        </div>
    );

};

export default SingleSliCard;