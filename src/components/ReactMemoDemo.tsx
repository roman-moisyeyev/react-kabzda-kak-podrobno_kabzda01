import React, {useState} from "react";


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('component users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const ReactMemoDemo = () => {

    console.log('ReactMemoDemo log')
    const [counter, stateCounter] = useState(0)
    const [users, setUsers] = useState(['Roman', 'Oleg', 'Igor', 'Vitaliy'])

    const addUser = () => {
        const newUsers= [...users,'NewUser' + new Date().getTime()]
        //users.push('NewUser' + new Date().getTime())
        setUsers(newUsers);
    }


    return <>
        <button onClick={() => {
            stateCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}