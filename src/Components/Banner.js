import React from 'react'
import "./Banner.css"
import banner from "../Logo/sample-banner.jpg"

function Banner() {
    return (
        <div className="Banner">
            <img src={banner}></img>
            <div className="banner-info">
                <h1 className='Title'>Breaking Bad</h1>
                <p className='Description'>Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.</p>
            </div>

        </div>
    )
}

export default Banner