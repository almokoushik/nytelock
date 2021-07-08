import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData.json" 
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Icon from '@material-ui/core/Icon';
import "./LogoData.css"
import SliCar from '../SliCar/SliCar';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const LogoData = () => {
    const [logoType,setLogoType]=useState(1)
    
    const classes = useStyles();
    
    

    const handleMouseOver=(e)=>{   
        e.target.style.textDecoration="underline";       
    }
    const handleMouseOut = (e) => {
        e.target.style.textDecoration = "none";
    }

    return (
        <div className="mx-3 p-5" style={{ backgroundColor: "#3C3C3C", borderRadius: "20px" }}>
            <div className="row d-flex justify-content-between align-items-end " >
                <div className="col-md-9 col-sm-12 text-start my-3">
                    <h6 style={{ color: "#FFCC29" }}><span style={{ fontSize: "60px"}} className="my-2">.</span> HOW DO I KNOW WHICH LOGO IS RIGHT FOR ME?</h6>
                    <h1 className=" text text-light my-2">Different Types of Logo Styles</h1>
                </div>
                <div className="col-md-3 col-sm-12 text-center align-items-end my-3 text-dark">
                    <Button
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        variant="contained"
                        className={classes.button}
                        endIcon={<IconButton className="bg bg-light"><ArrowForwardIcon></ArrowForwardIcon></IconButton>}
                        style={{ backgroundColor: "#FFCC29", borderRadius: "30px"}}
                        href="https://nytelock.com/quote/"
                        target="blank"
                        color="secondary"
                    >
                        <p className="pt-1 mt-1 " > <span style={{ fontSize: "16px", fontWeight: "700px", fontFamily: 'Montserrat'}}>Contact us</span></p>
                    </Button>
                </div>

            </div>

            <div className="row d-flex justify-content-between align-items-end " >
                <SliCar></SliCar>
            </div>
        </div>
    );
};

export default LogoData;