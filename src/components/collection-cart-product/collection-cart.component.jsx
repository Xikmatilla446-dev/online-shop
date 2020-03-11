import React from 'react';


import './collection.styles.scss';
import CartItem from "../cart-component-item/cart-item.component";
import CategoryFilter from './../collection-category-filter/collection-category-filter'
import ReactSelect from "../react-select-component/react-select.component";
import CheckboxComponent from "../Custom-checkboxes/Custom-checkboxes";

const CollectionComponent = () => {

    return(

        <div className="collection-header">

            <div className="collection-fliter">
                <CheckboxComponent/>
                <input type="text"/>
                <ReactSelect/>
            </div>

            <div className="collection-category">
                <CategoryFilter/>
                <CartItem/>
            </div>



        </div>
    )


};

export default CollectionComponent;
