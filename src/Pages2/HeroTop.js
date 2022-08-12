import React from 'react'
import styled from 'styled-components'

const HeroTop = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Text>
                Bringing ease and tech intro the resturant business in <span>Africa</span>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas quisquam eveniet fuga distinctio nesciunt quis. Fuga delectus modi earum?
                </div>
                <Btn>
                  <Buy>Buy Software</Buy>
                  <Learn>Learn More</Learn>
                </Btn>
                <Num>
                  <p className='user'>1287+ <div>Users</div></p>
                  <p className='served'>5786+ <div>Customers Served</div></p>
                </Num>
            </Text>
        </Wrapper>
      </Container>
    </>
  )
}

export default HeroTop

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Text = styled.div`
    width: 50%;
    margin-left: 50px;
    line-height: 57px;
    margin-top: 50px;
    font-size: 65px;
    span{
        color:#ffc529;
        letter-spacing: 20px;
    }
    div{
        font-size: 15px !important;
        line-height: 1.5;
        margin: 20px 0px;
        width: 70%;
    }
`
const Btn = styled.div`
  width: 440px !important;
  display: flex;
  justify-content: space-between;
`
const Buy = styled.div`
  width: 225px !important;
  background-color: #ffc529;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.543);
  border-radius: 4px;
  justify-content: center;
`
const Learn = styled.div`
  width: 180px !important;
  background-color: white;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.543);
  border-radius: 4px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Num = styled.div`
  display: flex;
  width: 300px !important;
  justify-content: space-between;
  text-align: center;
  /* margin-top: -20px; */
  /* margin-left:100px !important; */

  p{
    font-size: 30px;
    font-weight: 700;
    align-items: center;
    
    div{
      margin-top: -5px;
    }
  }
  .served{
      color: #ffc529;
    }
  .user{
      color: dimgray;
    }
`