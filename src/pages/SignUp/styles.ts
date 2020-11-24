import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
`;
export const Sign = styled.div`
   width: 560px;
`;
export const Logo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   position: absolute;
   top: 0;
   left: 40px; 
   margin: 10px auto;

   img {
       width: 300px;
   }
`;
export const Login = styled.div`
   h1 {
       text-align: center;
       margin: 30px 0;
       font-family: 'Times New Roman', Times, serif;
       font-weight: bold;
       font-size: 42px;
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
          background: #800080;
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
export const Wallpaper = styled.div`
   width: 100%;
   height: 100vh;
   background: #800080;
   color: #fff;
`;
export const Img = styled.div`
    display: flex;
    justify-content: center;
    img {
        margin: 30px auto;
        width: 450px;
    }
`;
export const T = styled.h2`
   font-size: 32px;
   font-weight: bold;
   text-align: center;
`;