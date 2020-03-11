import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({children}) =>(

    <button className="custom-button">
        {children}
    </button>
);

export default CustomButton;