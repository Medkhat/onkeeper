import styled from "styled-components"
import bg from '../../img/restaurant-bg.jpg'

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 0, 72, 0.286);
`
export const Container = styled.div`
    width: 30%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    @media (max-width: 1199px) {
        width: 40%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`
export const Logo = styled.h1`
    text-align: center;
    margin-top: 0;
    color: rgb(255, 0, 72);
`
export const FormGroup = styled.div`
    margin-bottom: 10px;
    display: ${props => props.thirdGroup ? 'flex' : 'block'};
    justify-content: ${props => props.thirdGroup ? 'space-between' : 'none'};
    align-items: ${props => props.thirdGroup ? 'center' : 'none'};
`
export const FormInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #e8e8e8;
    width: 100%;
    &:focus {
        border-color: rgb(255, 0, 72);
    }
`
export const Button = styled.button`
    background-color: rgb(255, 0, 72);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    &:hover {
        box-shadow: 0 10px 15px 0px rgba(0,0,0,0.3);
        transition: .3s;
         -webkit-transition: .3s;
         -moz-transition: .3s;
         -o-transition: .3s;
    }
`