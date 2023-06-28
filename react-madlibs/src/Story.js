import React from 'react'


const Story = ({noun1, noun2, adjective, color}) => {


    return (
        <div className='Story'>
            <h1>Why did the software engineer use a {adjective}, {color} {noun1} while coding? 
            Because they wanted to be a {noun2} at debugging!</h1>
        </div>
    )
}

export default Story