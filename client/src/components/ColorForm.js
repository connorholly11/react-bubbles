import React, {useState} from 'react'

const ColorForm = () => {

    const [addcolor, setAddColor] = useState({'hex code': '', color: ''})

    const ChangeHandler = e => {
        setAddColor({...addcolor, [e.target.name]: e.target.value})
    }

    const SubmitForm = e => {
        e.preventDefault()
        
    }

    return(
        <div>
            <form onSubmit={SubmitForm}>
                <input 
                name='hex code'
                placeholder='hex code'
                onChange={ChangeHandler}
                value={addcolor.HexCode}
                />

                <input 
                name='color'
                placeholder='color'
                onChange={ChangeHandler}
                value={addcolor.color}
                />
                
                <button type="submit"> Add Color </button>

            </form>
        </div>
    )
}

export default ColorForm