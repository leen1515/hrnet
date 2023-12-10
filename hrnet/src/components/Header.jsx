import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderParent = styled.div`
    position:fixed;
    z-index: 100;
    top:0;
    width:100%;
    background: linear-gradient(0deg, transparent 0%, #e9fed3 40%);
    `;
const ContainLink = styled.div`
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    width:300px;
    top: 0px;
    left:0;
    justify-content:flex-start;
    `;

const LinkStyle = styled(NavLink)`
    position:relative;
    font-size: 0.7em;
    font-weight: 400;
    margin-top: 10px;
    padding: 5px 10px;
    background-color:#e9fed3;
    border-radius: 0 10px 10px 0;
    width:200px;
    text-align: center;
    border:none;
    text-decoration:none;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.315);
    color:black;
    cursor:pointer;
    &:hover{
        background-color: #ffffff;
        color: black;
    }
    &.active {
        background-color: #9bbe1c;
        color: black;
    }
`;

const TitleH1 = styled.h1`
    position:relative;
    font-size: 2em;
    font-weight: 700;
    margin:10px auto;
    width:fit-content;
    `;

function Header(){

    return(<HeaderParent>
        <TitleH1>HRnet</TitleH1>
        <ContainLink>
        <LinkStyle to = "/employes" tabIndex={0}>View Employees</LinkStyle>
        <LinkStyle to = "/"tabIndex={0}>Create Employee</LinkStyle>
        </ContainLink>
        </HeaderParent>
    )
}


export default Header;