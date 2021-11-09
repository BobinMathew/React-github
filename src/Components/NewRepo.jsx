import React, {useState} from 'react'
import Modal from 'react-modal';


function NewRepo({open, setOpen}) {

    const [owner, setOwner] = useState('')
    const [repo, setRepo] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()
        // alert(owner+repo)
        
        setOpen(false)
    }
    return (
        <div >
            <Modal className='modal' isOpen={open}>
                ADD NEW REPOSITORY
                <form onSubmit={handlesubmit}>
                    Owner / Organization
                    <input type='text' onChange={(e)=>{setOwner(e.target.value)}} />
                    Repository Name
                    <input type='text' onChange={(e)=>{setRepo(e.target.value)}} />
                    <button type='submit'>ADD</button>
                </form>
            </Modal>
        </div>
    )
}

export default NewRepo
