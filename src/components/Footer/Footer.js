import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="w-100 d-flex align-items-center justify-content-center flex-wrap">
        <p className="px-3">
            Replicas Artech &copy; Todos Los Derechos Reservados 2022</p>
        <p className="px-3"> Piedrabuena 36, 46017 València, Valencia, España</p>
        <div id="iconos">
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon type='logo' name='twitter'></box-icon>
            <box-icon type='logo' name='instagram'></box-icon>
        </div>
    </footer>
  )
}

export default Footer