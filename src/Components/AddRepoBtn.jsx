import React, {useState} from 'react'
import NewRepo from './NewRepo'


function AddRepoBtn() {

    const [open, setOpen] = useState(false)

    return (
        <div className='addRepoBtn'>
            <button className='addRepoBtn' onClick={()=>setOpen(true)}>
                +
            </button>
            {open && <NewRepo open={open} setOpen={setOpen} />}
            
        </div>
    )
}

export default AddRepoBtn
