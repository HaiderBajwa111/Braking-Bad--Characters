import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../Spinner'
const CharacterGrid = (props) => {
    return (
        <>
        {
        props.isLoading ? (<div><Spinner/></div>) : (<section className="cards">{props.items.map((item) =>{
            return(
                <CharacterItem key={item.char_id} item={item}/>
            )
        }
        )}</section>)
    }
    </>
    )
}

export default CharacterGrid
