import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selecttrending } from "../features/movie/movieSlice";
const Trending = ()=>{
    const movies = useSelector(selecttrending);
    return(
<Container>
    <h4>Trending</h4>
    <Content>
    {
        movies && movies.map((movie,key)=>(
            <Wrap key={key}>
                {movie.id}
                <Link to={'/detail/' + movie.id}>
                    <img src={movie.cardImg} alt={movie.title} />
                </Link>
            </Wrap>
         ) )
     }
    </Content>
</Container>
    );
};

const Container = styled.div`
margin: 0 25px;
`;
const Content = styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
grid-gap: 25px;

@media (max-width:768px){
    grid-template-columns: repeat(2,minmax(0,1fr));
}
`;

const Wrap = styled.div`
padding-top: 50%;
overflow: hidden;
position: relative;
cursor: pointer;
border: 3px solid rgba(249,249,249,0.1);
border-radius: 10px;

img{
    inset: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 1;
    z-index: 1;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
}
&:hover{
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
}
`;
export default Trending;