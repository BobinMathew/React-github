import React, { useContext } from 'react'
import Context from '../Context/Context'


function Delete() {

    const {repoName,ownerName,addedLists, setAddedLists,setRepoName,setOwnerName} = useContext(Context)

    const handleDelete = () => {
        console.log(repoName,ownerName)
        
        // console.log(addedLists.map( (key,inx) => (key.data.owner.login)))
        // setAddedLists([addedLists.map((key)=>(key.data)).filter(item => item.name !== repoName)])
        // addedLists.map((key)=>(key.data)).filter(item => item.name !== repoName)
        
        setAddedLists(addedLists.map((key)=>(key)).filter(item => item.data.name !== repoName))
        setRepoName('')
        setOwnerName('')
        
    }


    return (
        <div className='deleteBtn'>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Delete
