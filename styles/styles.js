import styled from "styled-components";
import Image from 'next/image'
import Select from "react-select";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:100%;
  background-color: black;
  color: white;
  min-height: 100vh;

  &>div{
    width: 100%;
  }
`

export const StyledSidebar = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  width: 20vw;
  min-width: 20vw; 
  height: 100vh;
  background: rgba(4,65,4, 1);
  background: linear-gradient(180deg, rgba(4,65,4,0.25) 50%, rgba(0,0,0,0.9) 100%);
  color: white;
`

export const StyledSubtitle = styled.h4`
  text-align: center;
`

export const MenuItem = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: 45px;
  background: rgba(0,0,0,0.25);
  color: white;
  font-weight: bold;
  border: none;
  border: 1px solid rgba(0,0,0, 0.5);

  transition: all 0.2s linear 0s;
  &:hover {
    text-indent: 30px;
    background: rgba(0,0,0,0.5);
    cursor: pointer;

    &:before {
      transform: scale(1,1);
      text-indent: 0;
    }
  }
  &:active{
    background: #329ccd;
    color: black;
  }
`

export const ItemActive = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: 45px;
  background: #329ccd;
  color: white;
  font-weight: bold;
  border: none;
  border: 1px solid rgba(0,0,0, 0.5);
  cursor: pointer;
  text-indent: 30px;
  color:black;
`

export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 79.1vw;
  min-width: 79.1vw;
  padding-bottom: 50px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 100%;
`

export const Card = styled.div`
  background: rgba(3,45,3,0.2);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin: 50px;
  width: 250px;
  height: 350px;
  border-radius: 5px;//#329ccd
  border: 1px solid white;
  box-shadow: 0px 0px 5px 1px rgba(255,255,255,1);

  &:hover{
    border: 1px solid #329ccd;
    color: #329ccd;
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px #329ccd;
  }
  
  &>h2{
    text-align: center;
    font-size: x-large;
    height: 35px;
  }
`

export const Card2 = styled.div`
  padding-top: 10px;
  background: rgba(3,45,3,0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  width: 350px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0px 0px 5px 1px rgba(255,255,255,1);
  overflow: hidden;
  font-size: larger;

  &:hover{
    border: 1px solid #329ccd;
    color: #329ccd;
    cursor: pointer;
    box-shadow: 0px 0px 10px 1px #329ccd;
  }
  
  &>h2{
    text-align: center;
  }

  &>a{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 30px;
    padding-bottom: 5px;
  }
`

export const SearchContainer = styled.div`
  display:flex;
  border: 1px solid #329ccd;
  border-radius: 5px;
  background: rgba(3,45,3,0.2);
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 30px;
  padding: 10px;
  &>h3{
    font-size: x-large;
    color: #329ccd;
  }
  &>div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &>div>a{
    margin: 5px;
    border: 1px solid #329ccd;
    border-radius: 4px;
    color: #329ccd;
    text-align: center;
    padding: 9px;
    &:hover{
      background: white;
      color: #329ccd;
      cursor: pointer;
    }
  }
`

export const SearchInput = styled.input`
  width: 300px;
  height: 38px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  &:focus-visible{
    outline-color: #329ccd;
  }
`

export const StyledImage = styled(Image)`
  border-radius: 0px;
`

export const FavouriteMenu = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 30px;
  min-width: 300px;
  margin-top: 30px;
  margin-bottom: 15px;
  background-color: green;
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
`

export const PageSelector = styled.a`
  margin: 10px;
  font-size: larger;
  cursor: pointer;
`

export const ActivedPage = styled.a`
  padding: 4px; 
  font-size: larger;
  background: white;
  color: black;
  border-radius: 25%;
  cursor: pointer;
`

export const DeleteButton = styled.a`
  display: flex;
  justify-content: center;
  width: 100px;
  margin-top: -35px;
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 3px;
  color: rgba(255, 0, 0, 0.55);
  padding: 3px;
  cursor: pointer;
`

export const AddButton = styled.a`
  display: flex;
  justify-content: center;
  width: 100px;
  margin-top: -35px;
  border: 1px solid white;
  border-radius: 3px;
  padding: 3px;
  cursor: pointer;
`

export const StyledSelect = styled(Select)`
  width: 200px;
  margin: 10px;
  color: black;
`