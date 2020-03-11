import React from 'react';

import SectionComponent from "../../components/section.banner.component/section.component";
import CollectionComponent from "../../components/collection-cart-product/collection-cart.component";


import './home-page.styles.scss';


const HomePage = () => {

    return(
        <div className="home-page-header">
            <h1>Home page</h1>
            <SectionComponent/>
            <CollectionComponent/>

        </div>
    )


};

export default HomePage;