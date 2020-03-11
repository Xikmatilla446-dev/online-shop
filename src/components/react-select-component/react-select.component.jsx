import React, { Component } from 'react'
import Select from 'react-select'

import './react-select.styles.scss'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const ReactSelect = () => (

    <div className="react-select-header">

    <div className="chekbox-section">

    </div>
        <div className="select-section">
            <Select options={options} />
        </div>
    </div>

);

export default ReactSelect;