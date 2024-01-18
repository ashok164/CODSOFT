import React from 'react';


function CardForService(props){

    return(
    <div className="Service">
        <img src={props.image} height={props.height} width={props.width}/>
        <p>{props.title}</p>
    </div>    

    );


}

export default CardForService;