/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FormEvent, useState} from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Container, Sign, Logo, Login} from './styles'
import Image from '../../assets/img.svg'

import api from '../../services/api'


const SignUp = () => {


    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        api.post('/users', {
            name,
            lastname,
            email,
            password
        }).then(() => {
            history.push('/')
        }).catch(e => {
            alert('Houve um erro de cadastro')
        })

    }

    return (
        <Container>
           <Sign>
           <Logo>
             <img src="http://169.57.149.88/casanew/wp-content/uploads/2020/03/CBO_LATINCBO@2x.png" alt=""/>
          </Logo>
          <Login>
              <h1> Criar conta </h1>
              <form onSubmit={handleSubmit} >
                  <input  required type="text" name="name"   placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value)}} />
                  <input  required type="text"  value={lastname} onChange={(e) => setLastname(e.target.value) } placeholder="Sobrenome" />
                  <input  required type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="E-mail" />
                  <input  required type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha" />

                  <button type="submit" > Cadastrar </button>
              </form>
              <Link to="/" > Voltar </Link>
          </Login>  
           </Sign>
        </Container>
    )
}

export default SignUp
