import React from "react"

const SearchBox = ({search4Key}) => {
    return (
        <div>
            <input  
                className = "pa3 ba b--green bg-lightest-blue" 
                type = "search" 
                placeholder = "search robots"
                onChange = {search4Key}
            />
        </div>
    )
}

export default SearchBox