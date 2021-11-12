import React, {useState, useContext} from 'react'
import Modal from 'react-modal';
import Context from '../Context/Context'


function NewRepo({open, setOpen}) {

    const [owner, setOwner] = useState('')
    const [repo, setRepo] = useState('')

    const {getRepos} = useContext(Context)

    const handlesubmit = (e) => {
        e.preventDefault()
        // alert(owner+repo)
        getRepos(owner,repo)
        setOpen(false)
    }
    return (
        <div >
            <Modal className='modal' isOpen={open} ariaHideApp={false}>
                ADD NEW REPOSITORY
                <form onSubmit={handlesubmit}>
                    Owner / Organization
                    <input type='text' onChange={(e)=>{setOwner(e.target.value)}} />
                    Repository Name
                    <input type='text' onChange={(e)=>{setRepo(e.target.value)}} />
                    <button className='modalBtn' type='submit'>ADD</button>
                </form>
            </Modal>
        </div>
    )
}

export default NewRepo
