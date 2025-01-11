import React from 'react'
import './Definitions.css'

/* The dictionary api has one single large item in the JSON. In this app we refer to this entire section as meanings, so the one and only element is meanings[0]. If meanings[0] DNE, then the user did not type a valid word. 
*/
const Definitions = ({word, meanings, lightMode}) => {
    return (
        <div className="meanings" style={{ backgroundColor: lightMode ? "#DEE4E7" : "#37474F", color:  lightMode ? "#DEE4E7":"#37474F"}}>

            {
                (meanings[0] && word) && (
                    <audio className="audio" 
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{backgroundColor: "#DEE4E7", borderRadius: 10}}controls>
                        Your Browser does not support audio element.
                    </audio>
                )
            }
            {
                (word === "") ? 
                (
                    <span className="subTitle" style={{color:  lightMode ? "#37474F":"#DEE4E7"}}>Type a word above to display it in a list here</span>
                ) : 
                ( 
                    meanings.map((mean) => 
                        mean.meanings.map((item) => 
                            item.definitions.map((def) => (
                                <div className='singleMean' style={{ backgroundColor: lightMode ? "#37474F" : "#DEE4E7", color:  lightMode ? "#DEE4E7":"#37474F"}}> 
                                <b>{def.definition}</b>
                                <hr style = {{backgroundColor: "#37474F", width: "100%"}}/> {
                                    def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>
                                    )
                                }
                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                                </div>
                            ))
                        )
                    )
                )
            }
        </div>
    )
}

export default Definitions

