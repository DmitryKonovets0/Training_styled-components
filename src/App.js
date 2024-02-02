import {Component} from "react";
import styled from "styled-components";



const Wrapper = styled.div`
    height: 900px;
    padding-top: 32px ;
    background-color: #10141e;
    display: flex;
    justify-content: center;
    align-items: center;
  `
const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
const Block = styled.div`
    backdrop-filter: blur(64px);
    background-color: rgba(255, 255, 255, 0.05);
    width: 510px;
    height: 293px;
    border-radius: 20px;
    padding: 1px 24px 24px 24px;`
const Label = styled.div`
    font-size: 15px;
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    width: ${props => props.parentNode === 'Email' ? '50px' : '78px'};
    background-color: rgb(28, 27, 31);
`
const WrapperInput = styled.div`
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    align-items: end;
`
const Input = styled.input`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    background-color: transparent;
    border: none;
    display: flex;
    justify-content:space-between ;
`
const Hr = styled.hr`
    width: auto;
    border-color: rgba(255, 255, 255, 0.6);
`
const X = styled.div`
    display: flex;
    align-items: end;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    width: 24px;
    height: 24px;
`
const Button = styled.button`
    width: 377px;
    height: 64px;
    background-image: linear-gradient(40deg, rgb(9, 88, 250) 30%, rgb(9, 250, 50) 73%);
    border: none;
    font-size: 18px;
    color: #fff;
    margin-top: 51px;
    margin-left: 50%;
    transform: translate(-50%);
    border-radius: 60px;
    

`
export default class App extends Component {

  render() {
    return(
        <Wrapper>
            <Container>
                  <Block>

                      <Label parentNode='Email'>Email</Label>
                      <WrapperInput>
                          <Input type="text" placeholder='Enter your email'/>
                          <X>X</X>
                      </WrapperInput>
                      <Hr/>
                      <Label>Questions</Label>
                      <WrapperInput>
                          <Input type="text" placeholder='Enter your email'/>
                          <X>X</X>
                      </WrapperInput>
                      <Hr/>
                      <Button>Send question</Button>
                  </Block>
            </Container>
        </Wrapper>
    )
  }
}

