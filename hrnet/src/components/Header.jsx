import logo from '../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.header`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    width:40%;
    height:15vh;
    margin: auto;

    && img{
object-fit: contain;
width: 100%;
height:100%;
}
`;

const LinkStyle = styled(Link)`
    position:relative;
    font-size: 1em;
    font-weight: 400;
    margin-top: 100px;
    padding: 10px 20px;
    background-color:#e9fed3;
    border-radius: 10px;
    width:400px;
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

    return(<>
        <HeaderStyle>
        <LinkStyle to = "/ListEmploye">View Current Employees</LinkStyle>

            <img src={logo} alt="logo" />
            <LinkStyle to = "/">Create New Employee</LinkStyle>

        </HeaderStyle>
        </>
    )
}


export default Header;