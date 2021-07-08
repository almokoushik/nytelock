import React, { useContext } from 'react';
import { UserContext } from '../../App';
import LogoData from '../LogoData/LogoData';
import SliCardDetail from '../SliCardDetail/SliCardDetail';

const Home = () => {
    const [logoData,setLogoData]=useContext(UserContext)
    return (
        <div className="my-5">
            <LogoData></LogoData>
            <SliCardDetail props={logoData}></SliCardDetail>
        </div>
    );
};

export default Home;