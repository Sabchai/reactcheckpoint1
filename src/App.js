import React from 'react';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
import './index.css'; 

const firstName = "Sabi";
function App() {
  return (
    <div className="app-container"> 
      <Name />
      <Price />
      <Description />
      <Image />
      
      <hr />
      
      <div className="cards-container"> 
        <Card className="card">
          <Card.Body>
            <Card.Title>Moda Vintage</Card.Title>
            <Card.Img 
              variant="top" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMxe3lM9nl62Z6_GJKP3NXaBW7SpOE53jIQ&s" 
              className='img' 
              alt="Vintage Fashion"
            />
            <Card.Text>
              <h1>Historia de la moda vintage</h1>
              <p>
                Desde el comienzo de la Primera Guerra Mundial, la idea de la ropa vintage o de reutilizar la ropa comenzó a tomar vida. En las épocas de guerra, las dificultades económicas son comunes, por tanto, se enmiendan, arreglan y reparan las piezas. También se pasan de una generación a otra en una familia.
                Luego, a finales del siglo XX, hubo un incremento en la demanda de ropa de marca. Pero, a finales de los 80 en Estados Unidos, volvió la ropa vintage, porque se buscaba reducir precisamente el uso de ropa de marca.
                De ahí, poco a poco la ropa vintage pasó de ser una subcultura a ser parte del mainstream o la cultura masiva. Las razones de su uso incluyen la idea de la moda sostenible y el cuidado del medio ambiente.
              </p>
              <h1>Características de la ropa vintage</h1>
              <Card.Img 
                variant="top" 
                src="https://www.creativefabrica.com/wp-content/uploads/2023/04/20/Vintage-1950s-Ladies-Fashion-Clothes-Graphic-67675334-1-1.png" 
                className='img' 
                alt="Características de la ropa vintage"
              />
              <p>
                Lo que debes recordar es que un ítem vintage de verdad no dirá "vintage" en la etiqueta. La ropa vintage puede ser de alta costura, como ya dijimos, pero también puede ser de marcas populares. También puede ser usada o nueva que ha estado almacenada, hecha a mano o manufacturada.
                La ropa vintage también tiene que ver con la moda y el consumo responsable. Es una forma de bajarle el ritmo a un mundo acelerado, porque reusar ropa implica menos producción de ropa nueva.
                La mayoría de la ropa vintage fue usada previamente, pero un pequeño porcentaje de piezas nunca fue utilizado porque fueron almacenadas. Estas últimas tienen más valor, especialmente si tienen sus etiquetas originales. Algunos se refieren a estas como "new old stock" (NOS).
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <div style={{ marginTop: '20px', position: 'relative',bottom: '20px',right: '20px'}}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
