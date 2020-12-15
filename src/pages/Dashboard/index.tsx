import React from 'react'

import Header from '../../components/Header/index'
import { Container } from './styles'

const DashBoard = () => {

    return (
        <>
         <Header />
         <h1 style={{textAlign:"center", marginTop: 60}} > Portal de Acesso </h1>
         <Container>
             <ul>
                 <li>
                     <a href="https://www.google.com" target="_blank">
                        CheckSum
                     </a>
                </li>
                 <li>
                     <a href="/" target="_blank">
                        Itunes
                     </a>
                </li>
                 <li>
                     <a href="/" target="_blank">
                        Sky
                     </a>
                </li>
                 <li>
                     <a href="/" target="_blank">
                        Totvs
                     </a>
                </li>
                <li>
                     <a href="/" target="_blank">
                        N/A
                     </a>
                </li>
                <li>
                     <a href="/" target="_blank">
                        N/A
                     </a>
                </li>
             </ul>
         </Container>
        </>
    )
}

export default DashBoard
