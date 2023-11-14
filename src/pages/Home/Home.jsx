import { useState } from "react";
import MyHeader from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"


const Home = () => {
    const [isRecrut, setIsRecrut] = useState(false);
    return (
        <>
        <MyHeader setClicked={setIsRecrut} clicked={isRecrut}/>
        <Hero isRecrut={isRecrut}/>
        </>
    )
}
export default Home;