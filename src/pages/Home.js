import { Link } from "react-router-dom"

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const Home = () => {

    return (
        <div className="background">

            <h1>Home</h1>

            <Link to={'/about'}>About</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>

        </div>
    )
}

export default Home