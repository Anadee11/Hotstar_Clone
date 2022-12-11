import styled from "styled-components";

const Viewers = (props)=>{
    return(
        <Container>
        <Wrap>
            <img src="/images/viewer1.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} >
            <source src="/videos/disney.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewer2.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} >
            <source src="/videos/marvel.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewer3.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewer4.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} >
            <source src="/videos/pixar.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewer5.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
            </video>
        </Wrap>
        </Container>
    );
};

const Container = styled.div`
margin-top: 20px;
padding: 30px 10px 30px;
display: grid;
grid-template-columns: repeat(5,minmax(0,1fr));
grid-gap: 25px;
gap: 25px;

@media (max-width: 768px ){
    grid-template-columns: repeat(1,minmax(0,1fr));
}
`;

const Wrap = styled.div`
padding-top:55%;
border-radius: 10px;
overflow: hidden;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25,0.46,0.45.94) 0s;
border: 3px solid rgba(249,249,249,0.1);
position: relative;
img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
}
video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
   opacity: 0;
   z-index: 0;
}
&:hover{
    transform: scale(1.05);
    border-color:rgba(249,249,249,0.8);
    video{
        opacity: 1;
    }
}
`;
export default Viewers;