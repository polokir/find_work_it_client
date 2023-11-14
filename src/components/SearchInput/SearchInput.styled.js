import styled from "styled-components";


export const InputContainer = styled.div`
display: flex;
justify-content: center;
gap: 40px;
`

export const Input = styled.input`
width: 100%;
height: 60px;
border-radius: 10px;
font-size: 18px;
padding-left: 50px;
border: 0;
&:focus{
    outline: none !important;
}
font-family: "Roboto", sans-serif;
`

export const FindButton = styled.button`
width: 20%;
font-family: "Roboto", sans-serif;
border-radius: 10px;
border: 1px solid #fff;
color: #fff;
font-size: 20px;
font-weight: 700;
background-color: #FAA679;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
&:hover{
    background-color: #fff;
    color: #FAA679;
}
`