import styled from "styled-components";
import Carousel from "./carousel";
import NewDisney from "./NewDisney";
import Originals from "./originals";
import Recommends from "./recommends";
import Trending from "./trending";
import Viewers from "./viewers";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { doc, onSnapshot, collection, query, where } from "@firebase/firestore";

const Home = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let newDisney = [];
    let recommends = [];
    let trending = [];
    let original = [];
    // const [newDisney,setNewDisney] = useState([]);
    // const [recommends,setRecommends] = useState([]);
    // const [trending,setTrending] = useState([]);
    // const [originals,setOriginals] = useState([]);


    useEffect(()=>{
        const q = query(collection(db, "movies"))
        const unsub = onSnapshot(q, (querySnapshot) => {
          querySnapshot.docs.map(doc => {
            // console.log(recommends);
              switch(doc.data().type){
              case 'recommend': 
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
            // setRecommends([...recommends, { id: doc.id, ...doc.data() }]);
            //   recommends.push({id: doc.id, ...doc.data()});
              break;
              case 'trending':
                  trending = [...trending, { id: doc.id, ...doc.data() }];
                // setTrending([...trending, { id: doc.id, ...doc.data() }]);
                //   trending.push({id: doc.id, ...doc.data()});
                  break;
              case 'new':
                  newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                // setNewDisney([...newDisney, { id: doc.id, ...doc.data() }]);
                //   newDisney.push({id: doc.id, ...doc.data()});
                  break;    
              case 'original':
                  original = [...original, { id: doc.id, ...doc.data() }];
                // setOriginals([...originals, { id: doc.id, ...doc.data() }]);
                //   originals.push({id: doc.id, ...doc.data()});
                  break;
              }
          });
        
        dispatch(setMovies({
            recommend:recommends,
            newDisney:newDisney,
            trending:trending,
            original:original
        }))
    });
    },[username]);
    return (
        <Container>
            <Carousel/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    );
};
const Container = styled.main`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 80px;
padding: 0 calc(3.5vw+5px);

&:after{
    background:url('./images/home-background.png') center center no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    //The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.
opacity: 1;
z-index: -1;

}

`;
export default Home;

