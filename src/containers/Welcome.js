import React from 'react'
import { Button, Jumbotron} from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

import './style.css';

const Welcome = () => {
    return  (
    <Spring
        from={{opacity: 0, height: '0%', width: '100%'}}
        to={{opacity: 1, height: '100%', width: '100%'}}
        config={{ duration: 500}}
    >
        { props => (
            <div style={props}>
                <Jumbotron style={{'textAlign': 'center'}}>
                    <h1>Bienvenidos</h1>
                    <p>
                        Esta es la solución a la prueba técnica. 
                    </p>
                    <p>         
                        <Button variant="primary" href="https://github.com/caDonoso/redux_donoso">Repositorio GitHub</Button>
                    </p>
                </Jumbotron>
            </div>
        ) }
    </Spring>
    )
}

export default Welcome;