import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   
`;
export const Sign = styled.div`
   width: 560px;
`;
export const Logo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   margin: 10px auto;

   img {
       width: 300px;
   }
`;
export const Login = styled.div`
   h1 {
       text-align: center;
       margin: 30px 0;
       font-family: 'Roboto', sans-serif;
       font-weight: bold;
       font-size: 32px;
   }

   form {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       input {
           padding: 10px;
           margin: 10px;
           width: 300px;
       }

       button {
          background: #252525;
          color: #fff;
          font-weight: bold;
          line-height: 38px;
          padding: 10px;
          width: 300px;
          border-radius: 8px;
          margin: 20px 0;
       }
   }

   a {
       text-decoration: none;
       color: #252525;
       display: flex;
       justify-content: center;
       align-items: center;
   }


`;
