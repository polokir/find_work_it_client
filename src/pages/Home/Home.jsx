import { useState } from "react";
import MyHeader from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"


const Home = ({isAuth}) => {
    const [isRecrut, setIsRecrut] = useState(false);
    return (
        <>
        <MyHeader isAuth={isAuth} setClicked={setIsRecrut} clicked={isRecrut}/>
        <Hero isRecrut={isRecrut}/>
        </>
    )
}
export default Home;