import React, {useState, useContext, FormEvent} from 'react'

import { Link } from 'react-router-dom'

import { Container, Sign, Logo, Login, Wallpaper, Img, T } from './styles'
import Image from '../../assets/img.svg'

import AuthContext from '../../contexts/auth'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(e: FormEvent){
        e.preventDefault()

        signIn({
            email,
            password,
        }).catch(e => {
            alert('E-mail ou senha inválido!')
        })

    }

    return (
        <Container>
           <Sign>
           <Logo>
             <img src="http://169.57.149.88/casanew/wp-content/uploads/2020/03/CBO_LATINCBO@2x.png" alt=""/>
          </Logo>
          <Login>
              <h1> Faça o seu Login </h1>
              <form onSubmit={handleSubmit} >
                  <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <button type="submit" > Entrar </button>
              </form>
              <Link to="signup" > Primeiro acesso ? </Link>
          </Login>  
           </Sign>
           <Wallpaper>
               <Img>
                  <img src={Image} alt="image" />
               </Img>
               <T>
                   Sua plataforma para acessar os seus sistemas
               </T>
           </Wallpaper>
        </Container>
    )
}

export default SignIn
