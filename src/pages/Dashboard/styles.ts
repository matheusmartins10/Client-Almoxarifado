import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 90px auto;

  ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      li {
          background: #252525;
          width: 200px;
          border-radius: 8px;
          cursor: pointer;
          padding: 30px;
          margin: 10px;




          a {
              color: #fff;
              font-weight: bold;
              padding: 30px;
          }
      }
  }

  @media(max-width: 540px){
      ul {
          flex-direction: column;
          
          li {
              margin: 10px;
          }
      }
  }
`;