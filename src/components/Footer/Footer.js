import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer class="w-100 bg-light d-flex align-items-center justify-content-center flex-wrap">
        <p class="px-3">
            Replicas Artech &copy; Todos Los Derechos Reservados 2022</p>
        <p class="px-3"> Piedrabuena 36, 46017 València, Valencia, España</p>
        <div id="iconos">
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='twitter' type='logo' ></box-icon>
            <box-icon type='logo' name='instagram'></box-icon>
        </div>
    </footer>
  )
}

export default Footer