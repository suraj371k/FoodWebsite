import { useState } from "react"
import Menu from "../Menu"
import Header from "./Header"
import FoodDisplay from "../FoodDisplay"
import AppDownload from "../AppDownload"

const Home = () => {
    const [category , setCategory] = useState("All");

    return(
        <div>
        <Header/>
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
        </div>
    )
}

export default Home