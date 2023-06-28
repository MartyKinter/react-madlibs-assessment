import React, {useState} from "react";


function MadlibForm({addStory}){
    const INITIAL_STATE = {
        noun1: '',
        noun2: '',
        adjective:'',
        color:''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData =>(
           { 
            ...formData,
            [name]: value
           }
        ))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addStory({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <div className="MadlibForm">
            <h1>Enter Madlibs Data:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="noun1"
                    name="noun1"
                    type="text"
                    placeholder="noun1"
                    required
                    value={formData.noun1}
                    onChange={handleChange}
                />                
                <input
                    id="noun2"
                    name="noun2"
                    type="text"
                    required
                    placeholder="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                />
                <input
                    id="adjective"
                    name="adjective"
                    type="text"
                    placeholder="adjective"
                    required
                    value={formData.adjective}
                    onChange={handleChange}
                />
                <input
                    id="color"
                    name="color"
                    type="text"
                    placeholder="color"
                    required
                    value={formData.color}
                    onChange={handleChange}
                />
                <button>Get story</button>
            </form>
        </div>
    )
}

export default MadlibForm;
