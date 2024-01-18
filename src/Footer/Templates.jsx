import React from 'react';

function Templates(props){

    return(
        <div className="Card">
        <div><h2>{props.aboutus}</h2></div>
        <div><h3>{props.name}</h3></div>
        <div><p>{props.description}</p></div>
        <div><img src={props.image} /></div>
        </div>

    );

}
export default Templates ;