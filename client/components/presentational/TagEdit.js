import React from 'react';
import './TagEdit.css';

const TagEdit = (props) => {
    const inputs = Object.keys(props.tags).slice(0,4).map((value) =>
        <div key={value}>
            <label>{`${value[0].toUpperCase()}${value.slice(1)}`}</label>
            <input />
        </div>
    );

    return (
        <div>
            <form className="form">
                <h1>Edit MP3 Tags</h1>
                {inputs}
            </form>
        </div>
    );
};


export default TagEdit;