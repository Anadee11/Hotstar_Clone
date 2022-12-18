import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Cta>
                    <CtaLogoOne src="/images/cta-logo-one.svg" alt="" />
                    <Signup>FEEL THE AWESOMENESS</Signup>
                    <Description> Get Premier Access to all awesome shows for an additional fee
            with a Disney+ subscription. As of 03/12/22, the price of Disney+
            and The Disney Bundle will increase by ₹450.</Description>
            <CtaLogoTwo src="images/cta-logo-two.png"/>
                </Cta>
                <Bgimg />
            </Content>
        </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
height: 100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 80px 40px;
`;

const Bgimg = styled.div`
height: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url('/images/login-background2.jpg');
opacity: 40%;
`;

const Cta = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
`;

const CtaLogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
padding: 10px;
width: 100%;
letter-spacing: 0.5rem;
margin-bottom: 12px;
font-size: 18px;
border-radius: 2px;
cursor: pointer;

&:hover{
    background-color: #0484ee;
}
`;

const Description = styled.p`
color: hsla(0,01,95.31,1);
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CtaLogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
width: 100%;
`;
export default Login;