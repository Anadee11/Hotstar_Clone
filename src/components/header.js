import styled from "styled-components";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, signOut} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails,setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";
// import { hover } from "@testing-library/user-event/dist/hover";


const Header = (props)=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    console.log(userPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                history.push('./home')
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[username]);

    const handleAuth =()=>{
        if(!username){
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result)=>{
            console.log(result)
           setUser(result.user)
        })
        .catch((error) =>{
            alert(error.message);
        })
    }else if(username){
       signOut(auth).then(()=>{
            dispatch(setSignOutState())
            history.push('/')
        }).catch((error) =>{
            alert(error.message);
        })
    }
    };

    const setUser = (user)=>{
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            })
        )
    }
    // const handleAuth = ()=>{
    //     auth.signInWithPopop(provider).then((result)=>{
    //         console.log(result);
    //     }).catch((error) =>{
    //         alert(error.message);
    //     })
    // }
    return(
        <Navbar>
            <Logo>
            <img src="/images/logo.svg" alt="Disney" />
            </Logo>

            {
                !username ? (
                <Login onClick={handleAuth}>Login</Login>
                 ) : 
                 <>
            <NavItems>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
                </a>
                <a href="/home">
                    <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <img src="/images/original-icon.svg" alt="" />
                <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIES</span>
                </a>
                <a href="/home">
                    <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
                </a>
            </NavItems>
            <SignOut>
            <UserImg src={userPhoto} alt="" referrerpolicy="no-referrer"/>
            <Dropdown>
                <span onClick={handleAuth}>Sign Out</span>
            </Dropdown>
            </SignOut>
            </>
}
            {/* <Login onClick={handleAuth}>LOGIN</Login> */}
        </Navbar>   
    );
};

const Navbar = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: #090b13;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 40px;
letter-spacing: 16px;
z-index: 2;
`;

const Logo = styled.a `
width: 90px;
max-height:70px;
/* margin-top: 10px; */
/* display: inline-block;
img{
    display: block;
    width: 100%;
} */
`;

const NavItems = styled.div`
display: flex;
align-items: center;
flex-wrap: nowrap;
height: 100%;
margin: 0;
padding: 0;
position: relative;
margin-right:auto;
margin-left:25px;

@media (max-width:768px){
    display: none;
}
a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    img{

        width: 20px;
        min-width: 20px;
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.5px;
        line-height: 1.08;
        white-space: nowrap;
        position: relative;
    
    &:before{
background-color: rgb(249,249,249);
border-radius: 0px 0px 4px 4px;
bottom: -6px;
content: "";
height: 2px;
left: 0px;
opacity: 0;
position: absolute;
right: 0px;
transform-origin: left center;
transform: scaleX(0);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
visibility: hidden;
width: auto;
    }
}
&:hover{
    span:before{
        visibility: visible;
        transform: scaleX(1);
        opacity: 1;
    }
}
}
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius:4px;
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover{
    background-color: #f9f9f9;
    color: black;
}
`;
const Dropdown = styled.div `
position: absolute;
top:48px;
right: 0;
background: rgb(19,19,1);
border: 1px solid #4a4a4a;
border-radius: 3px;
font-size: 15px;
letter-spacing: 2px;
width: 100px;
opacity: 0;
padding: 10px;

`;
const UserImg = styled.img `
height: 100%;
border-radius: 50%;
/* width: 100%; */
`;

const SignOut = styled.div `
position: relative;
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
${UserImg}{
    width: 100%;
}
&:hover{
    ${Dropdown}{
        opacity: 23;
        transition-duration: 1s;
    }
}
`;

export default Header;