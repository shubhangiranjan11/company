import React from 'react'
import './App.css'


function First_page(params) {
    return (
        <>
            <div className='container'>
                <h1 className='first_heading'>Test</h1>
                <h2 className='sec_heading'>Tables:</h2>
                <h4 className='third_heading'>Users</h4>
                <table className='table'>
                    <tr>
                        <td>UID</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <h4 className='fourth_heading'>Users Details</h4>
                <table className='table2'>
                    <tr>
                        <td>UID</td>
                        <td>First Name</td>
                        <td>Second Name</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

            </div>
        </>
    )
}
export default First_page;

