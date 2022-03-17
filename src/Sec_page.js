import React from 'react'
import './App.css'


function Sec_page(params) {
    return(
        <>
        <div className='sec_container'>
            <h2 className='h2_heading'>Pages:</h2>
            <hr size="2" width="50%" color="black"></hr>
            <h3 className='login'>LOG IN</h3>
            <h4 className='email'>Email:</h4>
            {/* <button className='first_butt'></button> */}
            <h4 className='password'>Password:</h4>
            <p className='sign'>Sign Up</p>
            <h3 className='signup'>SIGN UP</h3>
            <h4 className='f_name'>First Name:</h4>
            <h4 className='s_name'>Last Name:</h4>
            <h4 className='email2'>Email:</h4>
            <h4 className='password2'>Password:</h4>
            

        </div>
        </>
    )
}

export default  Sec_page;



