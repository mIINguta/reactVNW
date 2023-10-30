import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width:100vw;
background: #FFA0D9;
padding:10px;
`
export const Nav = styled(Header)`

`
export const Ul = styled(Header)`
list-style: none;
width: 70vw;
justify-content: space-around;
`
export const Img = styled.img`
width: 15vw;
heigth: 15vh;
`
export const A = styled.a`
text-decoration: none;
color: #fff;
`