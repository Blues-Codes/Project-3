import { Link } from "react-router-dom";


// {Games list}


const AllGames = () =>{

    return (

        <><nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>

        </nav>
        
        <div className="background">

        </div>
            </>
    )


}

export default AllGames;