import CreateForm from '../components/CreateForm';
import styled from 'styled-components';

export const SubTitle = styled.h2`
    font-size: 2em;
    font-weight: 700;
    margin:50px auto 0 auto;
    width:fit-content;
    `;


function Home() {
    return(
        <div>
            <SubTitle>Create Employee</SubTitle>
            <CreateForm/>
        </div>
    );
}

export default Home;