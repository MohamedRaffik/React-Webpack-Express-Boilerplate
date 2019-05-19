import React, { Component } from 'react';
import { TagEdit } from '..';

const Downloader = (props) => {
    return (
        <div>
            <TagEdit inputs={Object.keys(props.tags).slice(0,4)}/>
        </div>
    );
};

export default Downloader;