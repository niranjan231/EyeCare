import "./InputBox.css"
import { CiSearch } from "react-icons/ci";
import "../Responsive.css"
// import Banner from "../Image/Ba.webp"






const InputBox = () => {
    return (
        <div className="input-1">
            <h1>Get Your Bakery</h1>
            <p>Our curated collection features frames that are as unique as you are.</p>
            <div className="input-3">
                <input type="text" placeholder="search your product"></input>
                <button><CiSearch />Search</button>
               
            </div>

        </div>
    )
}
export default InputBox;