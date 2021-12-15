import React from 'react'

function ProfileName({name, url}) {
    return (
        <div className="profile">
            <img src={url} className="profile__img" />
            <h4>{name}</h4>
        </div>
    )
}

export default ProfileName
