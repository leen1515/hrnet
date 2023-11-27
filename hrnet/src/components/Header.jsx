import logo from '../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderParent = styled.div`
    position:fixed;
    z-index: 100;
    `;

const HeaderStyle = styled.header`
    position:relative;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:row;
    width:40%;
    height:15vh;
    margin: 0;
    background : linear-gradient(130deg, #ffffff 40%, #fffff027 50%);
    && img{
object-fit: contain;
width: 30%;
height:100%;
}
`;

const ContainLink = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    width:300px;
    top: 0px;
    left:0;
    justify-content:flex-start;
    `;

const LinkStyle = styled(Link)`
    position:relative;
    font-size: 1em;
    font-weight: 400;
    margin-top: 10px;
    padding: 10px 20px;
    background-color:#e9fed3;
    border-radius: 10px;
    width:200px;
    text-align: center;
    border:none;
    text-decoration:none;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
    cursor:pointer;
    &:hover{
        background-color: #ffffff;
    }
`;

function Header(){

    return(<HeaderParent>
        <HeaderStyle>
            
            <img src={logo} alt="logo" />
            
        </HeaderStyle>
        <ContainLink>
        <LinkStyle to = "/employes">View Current Employees</LinkStyle>
        <LinkStyle to = "/">Create New Employee</LinkStyle>
        </ContainLink>
        </HeaderParent>
    )
}


export default Header;