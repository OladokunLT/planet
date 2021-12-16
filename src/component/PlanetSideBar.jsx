import CloseButton from 'react-bootstrap/CloseButton'

const PlanetSideBar = ({name, description, characters, population, setShow}) => {

    const handleClick = () => {
        setShow(false)
    }

    return ( 
        <>
            <div  className ="sidebar right " data-spy="scroll"> 
            <div className="d-flex justify-content-end"><CloseButton  onClick={handleClick}/></div> 
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <span>Population <br/> <strong>{population}</strong> </span>
                {/* <span>Friends <strong>{friends}</strong></span> */}
            </div>


{
    // console.log(friends)
    characters.map(c => {
        return             <div className="d-flex flex-row p-3" key={c.id}>
        <img src={c.image} alt="" width="70px" height="70px" className="rounded-circle p-2"/>
        <div>
            <strong>{c.name}</strong>
            <p>{c.length} Friends</p>
        </div>
    </div>
    })
}

        </div>
        </>
     );
}
 
export default PlanetSideBar;