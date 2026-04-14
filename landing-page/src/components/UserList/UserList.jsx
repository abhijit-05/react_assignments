import React from 'react'
import MainBody from '../MainBody/MainBody'

function UserList(props) {
    const {name, age, nationality} = props;
    return (
        <div>
            <MainBody name={name} age={age} nationality={nationality} />
        </div>
    )
}

export default UserList