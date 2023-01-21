import React from 'react'
import './Cstyles.css';


function Header() {
  return (
    <>
      <header className='container'>
        <div class="header-wrap">
          <div class="profile-pic">
            <img src="/images/profileimg.jpg" alt="profile-logo" />
          </div>
          <div class="profile-info">
            <div class="title row">
              <h2>virat.kohli</h2>
              <span class="verfied-icon">
                <img src="/images/verified.png"></img>
              </span>
              <button class="Profilebtn">Follow</button>
              <button class="Profilebtn">Message</button>

            </div>
            <div class="desktop-only">
              <div class="details row">
                  <li><span>722</span> posts</li>
                  <li><span>25.1m</span> followers</li>
                  <li><span>6</span> following</li>
              </div>
              <div class="descriptions row last">
                <span>
                <b>Virat Kohli</b>
                <br/>
                Carpediem!
                  <br />
                  <a href='#'>one8.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
