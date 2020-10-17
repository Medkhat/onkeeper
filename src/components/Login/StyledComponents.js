import styled from "styled-components";
import bg from "../../img/restaurant-bg.jpg";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 0, 72, 0.286);
`;
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
`;
export const Logo = styled.h1`
    text-align: center;
    margin-top: 0;
    color: rgb(255, 0, 72);
`;
export const FormGroup = styled.div`
    margin: ${(props) => (props.thirdGroup ? "20px 0" : "0 0 10px 0")};
    display: ${(props) => (props.thirdGroup ? "flex" : "block")};
    justify-content: ${(props) =>
        props.thirdGroup ? "space-between" : "none"};
    align-items: ${(props) => (props.thirdGroup ? "center" : "none")};
`;
export const FormInput = styled.input`
    padding: 10px;
    border-radius: 5px;
    outline: none;
    font-size: 15px;
    border: 2px solid #e8e8e8;
    width: ${(props) => (props.type === "checkbox" ? "auto" : "100%")};
    &:focus {
        border-color: rgb(255 0 72 / 65%);
    }
`;
export const Button = styled.button`
    background-color: rgb(255, 0, 72);
    position: relative;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px 20px;
    display: block;
    width: 100%;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    &:hover {
        box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.3);
        transition: 0.3s;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }
`;
