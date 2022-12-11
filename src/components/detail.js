import styled, { ThemeConsumer } from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
// import { collection } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
const Detail = (props)=>{
    const {id} = useParams();
    const [detail,setDetail] = useState({});
    useEffect( ()=>{
        (async () => {
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    if(doc.id==id){
                    setDetail(doc.data());
                    }
                  } else {
                    console.log("Sorry vai nahi hai");
                  }
            //   console.log(`${doc.id} => ${doc.data()}`);
            });
          })();
    //     db.collection("movies")
    //   .doc(id)
    //   .get()
    //   .then((doc) => {
        // if (doc.exists) {
        //   setDetail(doc.data());
        // } else {
        //   console.log("Sorry vai nahi hai");
        // }
    //   })
    //   .catch((error) => {
    //     console.log("Error getting document:", error);
    //   });
        //   getDoc(doc(db, "movies", id)).then(docSnap => {
        //     console.log(docSnap);
        //     if (docSnap.exists) {
        //       setDetail(docSnap.data());
        //     } else {
        //       console.log("Sorry vai nahi hai");
        //     }
        //   }).catch((error) => {
        //     console.log("Error getting document:", error);
        // });
    },[id]);
    return (
<Container>
    <Background>
        <img src={detail.backgroundImg} alt={detail.title} />
    </Background>
    <ImageTitle>
        <img src={detail.titleImg} alt={detail.title} />
    </ImageTitle>
    <MetaContent>
    <Controls>
        <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
        </Player>
        <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
        </Trailer>
        <AddBtn>
         <img src="/images/plus-sign.svg" alt="" />
        </AddBtn>
        <AddBtn>
         <img src="/images/group-icon.png" alt="" />
        </AddBtn>
    </Controls>
    <SubTitle>
        {detail.subTitle}
    </SubTitle>
    <Description>
        {detail.description}
    </Description>
    </MetaContent>
</Container>
    );
};

const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 70px;
padding: 40px 0px;
`;

const Background = styled.div`
left:0;
opacity: 0.8;
position: fixed;
right: 0;
top: 0;
z-index: -1;
img{
    width: 100vw;
    height: 100vh;
    @media (max-width:768px) {
        width: initial;
    }
}
`;

const ImageTitle = styled.div`
display: flex;
align-items: center;
justify-content: start;
margin: 0 auto;
height: 38vh;
width: 100%;
padding-bottom: 40px;
img{
    width: 35vw;
    min-width: 200px;
    max-width: 600px;
}
`;
const MetaContent = styled.div`

`;
const Controls = styled.div`
display: flex;
align-items: center;
flex-wrap: nowrap;
margin:18px 50px;
min-height: 60px;
`;
const Player = styled.button`
padding: 0px 20px;
font-size: 18px;
height: 55px;
display: flex;
align-items: center;
margin: 30px 10px;
letter-spacing: 1.6px;
text-transform: uppercase;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: rgb(198,198,198);
}
@media (max-width:768px){
    height: 45px;
    padding: 0 15px;
}
`;
const Trailer = styled(Player)
`
background-color: rgb(0,0,0,0.3);
color: rgb(249,249,249);
border:1px solid white;
`;

const AddBtn = styled.div`
display: flex;
width: 55px;
height:55px;
background-color: rgb(0,0,0,0.6);
border-radius: 50%;
padding:5px;
border:1px solid white;
cursor: pointer;
margin-left: 15px;
`;
const SubTitle = styled.div`
margin-left:50px;
font-size:15px;
min-height:20px;
@media (max-width:768px) {
font-size:12px;
}
`;
const Description = styled.div`
margin-left:50px;
font-size: 20px;
padding:16px 0px;
@media (max-width:768px) {
    font-size:14px ;
}

`;
export default Detail;
