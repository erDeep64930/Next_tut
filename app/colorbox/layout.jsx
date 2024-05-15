import React from 'react'

const layout = ({ children, left, right }) => {
    // to makee conditional rendrender
    const isSideBar = true
    return (
        <div>
            {children}
            {/* {left}
            {right} */}
            {isSideBar ? left : right}

            layout</div>
    )
}

export default layout