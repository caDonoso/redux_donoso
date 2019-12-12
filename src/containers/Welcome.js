import React from 'react'
import { Button, Jumbotron} from 'react-bootstrap';

const Welcome = () => {
    return  (
    <Jumbotron style={{width: '100%', 'text-align':'center'}}>
        <h1>Bienvenidos</h1>
        <p>
            Esta es la solución a la prueba técnica. 
        </p>
        <p>         
            <Button variant="primary" href="https://github.com/caDonoso/redux_donoso">Repositorio GitHub</Button>
        </p>
    </Jumbotron>
    )
}

export default Welcome;