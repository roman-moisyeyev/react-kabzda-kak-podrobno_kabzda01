import React, {useMemo, useState} from "react";


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, stateCounter] = useState(0)
    const [users, setUsers] = useState(['Roman', 'Oleg', 'Igor', 'Vitaliy'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => stateCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>

}

export default UsersSecret