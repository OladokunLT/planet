
import { useState } from "react";
import { planets } from "../data";
import PlanetSideBar from "./PlanetSideBar";
import CreatePlanet from "./CreatePlanet"

const Planets = () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState({})

  const handleClick = (e, planet) => {
    setShow(true)
    setValue({
      name : planet.name,
      characters: planet.character,
      description : planet.description,
      population : planet.population
    })
    console.log(planet)
    console.log(value.characters)
  }

    return ( 
        <div className="d-flex row">
            <div className="d-flex row">
                {
                    planets.map(planet =>  {
                        return <div style={{ width: '16rem' }} className="my-4 mx-3 p-3 planet" onClick={e => handleClick(e, planet)} key={planet.id}>
                        <img variant="top" src={planet.image} alt="alpha" width="120px" height="120px" className="d-flex m-auto"/>
                        <div>
                          <div className="fw-bold">{planet.name}</div>
                          <div className="opacity-50">
                            {planet.prop}
                          </div>
                        </div>
                      </div>
                    })
                }

                <CreatePlanet/>
            </div>
            {
                show && <PlanetSideBar name={value.name} characters={value.characters} population={value.population} description={value.description} setShow={setShow}/>
            }
              

</div>
     );
}
 
export default Planets;