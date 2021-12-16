import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { characters } from "../data";
import { AiFillPlusCircle } from "react-icons/ai";
import Form from 'react-bootstrap/Form'    



const CreateCharacter = () => {
    const [char, setChar] = useState(characters)
    const [newChar, setNewChar] = useState({})
    const [name, setName] = useState()
    const [description, setDescription] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmission = (e) => {
e.preventDefault()

        setNewChar({
            id: char.length + 1,
            name: name,
            description: description,
            image : "",
            friends : []
        })
        const c = characters.concat(newChar)
        console.log(c);
        // setChar(char.concat(newChar))

        console.log(newChar)
        console.log(char);

        localStorage.setItem("newChar", JSON.stringify(newChar));
     setChar(char.concat(JSON.parse(localStorage.getItem("newChar"))))
    //  if (savedChars) {
    //      setChar(char.concat)
    //  }
        // console.log(savedChars);

    }

  
    return (
      <>
        <div className="d-flex justify-content-end plus">
            <AiFillPlusCircle style={{fontSize:"50px"}} onClick={handleShow} />
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <form onSubmit={handleSubmission}>
          <Modal.Body>
          <h1 className="planetForm">Character</h1>

          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formimg">image</Form.Label>
              <Form.Control className="formInput" type="text" />
              <p className="pasteimg">Paste the URL of a JPG or PNG</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formimg">Name</Form.Label>
              <Form.Control className="formInput" type="text" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formimg">Description</Form.Label>
              <Form.Control className="formInput" as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formimg">Friends</Form.Label>
            <Form.Select size="sm" className="formInput">
              <option>
                  Jane Cooper
              </option>
            </Form.Select>
          </Form.Group>
        </Form>  
        <div className="d-flex justify-content-end">
          <Button className="mx-4 closeForm" onClick={handleClose}>Close</Button>
          <Button className="createForm">Create character</Button>
        </div> 
        </Modal.Body>
          </form>

        </Modal>

      </>
    );
}
 
export default CreateCharacter;