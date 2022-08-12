import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Logo>NewAge <span>Restaurant</span></Logo>
            <Navigation>
                <Navs>
                    <Home>Home</Home>
                    <Sub>Subscribe</Sub>
                    <Rev>Reviews</Rev>
                    <Faq>FAQ</Faq>
                </Navs>
                <Contact>+2340000000</Contact>
            </Navigation>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
    width: 100%;
    height: 80px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    font-size: 36px;
    font-weight: 600;
    margin-left: 50px;
    span{
        color: #ffc529;
    }
`
const Navigation = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
`
const Navs = styled.div`
    display: flex;
    width: 310px;
    justify-content: space-between;
`
const Home = styled.div`
    font-size: 16px;
    color: #ffc529;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Sub = styled.div`
    font-size: 16px;
    color: #ffc529;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Rev = styled.div`
    font-size: 16px;
    color: #ffc529;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Faq = styled.div`
    font-size: 16px;
    color: #ffc529;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Contact = styled.div`
    width: 180px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    background-color: #ffc529;
    align-items: center;
    justify-content: center;
    color: white;
`
