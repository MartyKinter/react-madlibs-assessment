import React, {useState} from 'react'
import MadlibForm from './MadlibForm'
import Story from './Story'

const Madlibs = () => {

    const INITIAL_STATE = [
        {
            noun1: "",
            noun2: "",
            adjective: "",
            color: ""
        }
    ]

    const [storyData, setStoryData] = useState(INITIAL_STATE)
    const [showForm, setShowForm] = useState(true);


    const addStory = (story) => {
        setStoryData({...story});
        setShowForm(false);
    };


    const handleShowForm = () =>{
        setShowForm(true);
    }

    return (

            <div>
            <h1>MADLIBS</h1>
            {showForm ? (
              <div>
                <MadlibForm addStory={addStory} />
              </div>
            ) : (
              <div>
                <h1>Your Story</h1>
                <Story
                  noun1={storyData.noun1}
                  noun2={storyData.noun2}
                  adjective={storyData.adjective}
                  color={storyData.color}
                />
                <button onClick={handleShowForm}>Restart</button>
              </div>
            )}
          </div>
        
    )
}

export default Madlibs