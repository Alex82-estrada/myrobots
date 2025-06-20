import { useState } from "react";

function SearchBar({ onSubmit }) {
    const[term, setTerm] = useState('')
       
    
    const handleFormSublint = (event) => {
        event.preventDefault()
        console.log("I need to tell the parent about some data")
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)

    }

    console.log('term', term)

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSublint}>
                <label >Enter search Term</label>
                <input
                className="input is-info"
                type="text"
                placeholder="info input"
                onChange={handleChange}
                value={term}
            />
            </form>
        </div>
    )

}

export default SearchBar