import styled from 'styled-components';
import xMark from './icone/xmark.svg';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #39450b85;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const ModalBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    padding: 5px 20px;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

const CloseButton = styled.button`
    background-color: black;
    color:white;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -10px;
    margin-right: -10px;
    width:30px;
    height:30px;
    border-radius: 50%;
    cursor: pointer;
`;

function Modal ({ isOpen, children, onClose }){
    if (!isOpen) {
        return null;
    }

    return (
        <ModalBackdrop>
            <ModalBox>
                {children}
                <CloseButton onClick={onClose}><img src= {xMark} width="100%" alt="close"/></CloseButton>
            </ModalBox>
        </ModalBackdrop>
    );
};

export default Modal;
