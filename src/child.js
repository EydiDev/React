import React from 'react';
import Photo from './gggg.png'
const child = (props) => {
    return (
        console.log("child rendered"),
        <div>
            memo
            <br/>
            {props.text} child
        </div>
    );
};

export default React.memo(child);