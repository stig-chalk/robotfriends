import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>            
        </div>
    );
}

const CardList = ({robots}) => {
    return (
        <div>
        {
            robots.map((bot, i) => {
                return (<Card key = {i} id = {bot.id} name = {bot.name} email = {bot.email}/>)
            })
        }
        </div>
    )
}

export default CardList;