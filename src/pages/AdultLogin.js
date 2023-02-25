import { Link } from "react-router-dom"
// import { ReactDOM } from "react";
import { useState } from "react";
import { Axios } from "axios";
// const bcryptjs = require('bcryptjs');
// const saltRounds = 10;


const AdultLogin = () => {
    
    const handleSubmit = () => {

        
    }



    return (
        <><nav>

            <h1>Home</h1>

            <Link to={'/about'}>About</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>

        </nav>
            <div classname="login">
            <form onSubmit={handleSubmit}>

                <label>Parent Name</label>
                <input type='text' name="name" />

                <label>Email</label>
                <input type='email' name="Email"/>

                <label>Password</label>
                <input type='text' name="Password"/>

                <label>Child's Name</label>
                <input type='text' name ="Childsname"/>

                <label>Child's Age </label>
                <input type='number' name="age" />

                {/* <label></label>
                <input type='number' />

                <label></label>
                <input type='text' />
 */}
                <button type="submit">Sign Up</button>

            </form>

            </div></>
    )

}

export default AdultLogin