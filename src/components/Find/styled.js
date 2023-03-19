import styled from "styled-components";

export const FindSectionLayout = styled.section`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 33px;
padding: 66px;

`;

export const FindSectionTitle = styled.p`
  font-size: 45px;
  
`

export const FindSectionMap = styled.div`
  width: 100%;
  height: 400px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FindSectionAddress = styled.div`

  width: 100%;
  height: auto;
  text-align: left;
  padding: 10px 50px;

  p{ 
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
/* 
  span {
    margin-left: 15px;
  } */
`