import React from 'react';

import './Custom-checkboxes.styles.css';


const CheckboxComponent = () => {

    return (
        <form action="#" className="checkbox-hearder">
            <ul className="checkbox-ul">
                <li><input type="checkbox" id="test1"/><label htmlFor="test1">XL</label></li>
                <li><input type="checkbox" id="test2"/><label htmlFor="test2">X</label></li>
                <li><input type="checkbox" id="test3"/><label htmlFor="test3">XX</label></li>
                <li><input type="checkbox" id="test4"/><label htmlFor="test4">LX</label></li>
            </ul>
        </form>
    )

};

export default CheckboxComponent;
