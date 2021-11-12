import React from 'react'


function Container({movieList}) {
    console.log("container", movieList)
    return (
        <div>
            {movieList && movieList.map(el => {
                return <li> {el.title}</li>
            })}
        </div>
    )
}

export default Container
