import React from 'react'
import './Definitions.css'

/* The dictionary api has one single large item in the JSON. In this app we refer to this entire section as meanings, so the one and only element is meanings[0]. If meanings[0] DNE, then the user did not type a valid word. 
*/
const Definitions = ({word, meanings, lightMode}) => {
    return (
        <div className="meanings">

            {
                (meanings[0] && word) && (
                    <audio className="audio" 
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{backgroundColor: "#fff", borderRadius: 10}}controls>
                        Your Browser does not support audio element.
                    </audio>
                )
            }
            {
                (word === "") ? 
                (
                    <span className="subTitle">Start by typing a word in search</span>
                ) : 
                ( 
                    meanings.map((mean) => 
                        mean.meanings.map((item) => 
                            item.definitions.map((def) => (
                                <div className='singleMean' style={{ backgroundColor: lightMode ? "rgb(105,105,120" : "white", color:  lightMode ? "white":"black"}}> 
                                <b>{def.definition}</b>
                                <hr style = {{backgroundColor: "black", width: "100%"}}/> {
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

