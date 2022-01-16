import React from 'react'
import './homepage.scss'

function HomePage() {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>JACKETS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>Laddies</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>MANS</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menuItem'>
                    <div className='content'>
                        <h1 className='title'>CHILDREN</h1>
                        <span className='subTitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
