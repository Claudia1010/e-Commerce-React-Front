import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.scss'

const Home = () => {
  return (
    <div className='home-carousel'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/R.b7e26d70268b99f3ef04dca51cd04607?rik=zPC3FkSoNwgZig&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wYUB4ANMNdI%2fUnfxw44BX3I%2fAAAAAAAAAuo%2fyvXEoKqjAxU%2fs1600%2f20x60%2bSouth%2bBeach.jpg&ehk=xiwC9Q1AbElSfSvlOJMbfenDbOjEkSEaULMTMSJunY4%3d&risl=&pid=ImgRaw&r=0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Arte Clásico y Moderno</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.laguardia.edu/uploadedImages/Main_Site/Content/Academics/Majors/finearts.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Todos los movimientos artísticos</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www-fbnz.fujifilm.com/-/media/FBNZ/4,-d-,-Company/4,-d-,1-About-Fuji-Xerox-New-Zealand/Sponsorship/arts.jpg?h=370&w=940&la=en&hash=6FEFE8ECE80ECEFAFE53ECB6B343A4F352E3EC22"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Réplicas exactas</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;