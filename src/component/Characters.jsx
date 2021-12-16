import { useState } from "react";
import { characters } from "../data";
import CharacterSidebar from "./CharacterSidebar";
import CreateCharacter from "./CreateCharacter";



const Characters = () => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState({})

    const rollit = (e, char) => {
      setShow(true)
      setValue({
        name : char.name,
        friends: char.friends.map(f => f),
        description : char.description
      })
      console.log(char)
      console.log(value.name)
    }

    return ( 
        <div className="d-flex row ">
          <div className="d-flex flex-row col-12 col-md-8 flex-wrap">
              {
                    characters.map(char =>  {
                        return <div className="card character my-4 mx-3 px-0 pointer" onClick={(e) => rollit(e, char)} key={char.id}>
                        <img class="card-img-top char-img" src={char.image} alt="Card  cap"/>
                        <div class="card-body">
                          <h5 class="card-title">{char.name}</h5>
                          {
                             <p>{char.friends.length} friends</p>
                          }
                          
                        </div>
                        
                      </div>

                    })

                }
              <CreateCharacter/>
              </div>

                   {     
                   show && <CharacterSidebar name={value.name} friends={value.friends} description={value.description} setShow={setShow}/>
                  
              }
              
           </div>
     );
}
 
export default Characters;