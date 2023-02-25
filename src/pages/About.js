import { Link } from "react-router-dom";





const About = () =>{

    return (

        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>All Games</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>

        </nav>
    )


}

export default About;