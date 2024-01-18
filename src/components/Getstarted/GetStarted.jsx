import React from 'react'
import './GetStarted.css';
const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With HAmyz</span>
                <span className='secoundaryText'>Subscribe and find attrative price quotes from us.
                    <br />
                    find your residence soon
                </span>
                <button className="button">
                    <a href="mailto:jerinjoseph703@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted