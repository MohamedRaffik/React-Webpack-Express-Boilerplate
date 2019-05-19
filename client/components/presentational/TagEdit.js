import React from 'react';
import './TagEdit.css';

const TagEdit = (props) => {
    const inputs = props.inputs.map((value) =>
        <div key={value}>
            <label>{`${value[0].toUpperCase()}${value.slice(1)}`}</label>
            <input />
        </div>
    );

    return (
        <form className="form">
            <h1>Edit MP3 Tags</h1>
            {inputs}
        </form>
    );
};


export default TagEdit;