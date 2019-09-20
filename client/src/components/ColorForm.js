import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const ColorForm = () => {

    const [addcolor, setAddColor] = useState({code:{hex: ''}, color: ''})

    const ChangeHandler = e => {
        setAddColor({...addcolor, [e.target.name]: e.target.value})
    }

    const SubmitForm = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/colors', addcolor)
            .then(res => {
                console.log('addcolor', res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <form onSubmit={SubmitForm}>
                <input 
                name='hex'
                placeholder='hex'
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