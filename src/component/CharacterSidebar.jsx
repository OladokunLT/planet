import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'


function CharacterSidebar({name, friends, description, setShow}) {

    const handleClick = () => {
        setShow(false)
    }

    return (
            <div className = "sidebar char-right col-4" data-spy="scroll">
            <div className="d-flex justify-content-end"><CloseButton  onClick={handleClick}/> </div> 
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <span>Planet <strong>Alpha</strong></span>
                {/* <span>Friends <strong>{friends}</strong></span> */}
            </div>

    
{
    // console.log(friends)
    friends.map(f => {
        return             <div className="d-flex flex-row p-3" key={f.name}>
        <img src={f.image} alt="" width="70px" height="70px" className="rounded-circle p-2"/>
        <div>
            <strong>{f.name}</strong>
            <p>{friends.length} Friends</p>
        </div>
    </div>
    })
}

        </div>
    )
}

export default CharacterSidebar;