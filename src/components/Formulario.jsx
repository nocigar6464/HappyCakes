import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" placeholder=" " />
      </Form.Group>
      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;
