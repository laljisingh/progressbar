import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';


function Apis() {
    const [count, setCount] = useState(0);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://api.github.com/users');
            const data = await res.json();
            console.log(data);
            setUsers(data);
        }
        fetchData();
    }, []);

    useEffect(()=>{
        if(filterValue){
            const newUsers = users.filter((user)=>{
                return user.login.includes(filterValue);
            })
            setFilteredUsers(newUsers);
        }else{
            setFilteredUsers(users);
        }
    })

    function handleClick() {
        setCount(count + 1);
    }

    function handleChange(event){
        setFilterValue(event.target.value);
    }
    return (
        <>
        <input
        type="text"
        value={filterValue}
        placeholder='enter your text here'
        onChange={(e) => handleChange(e)}
        className='bg-yellow-200 text-black p-2 mt-5'
      />

            {filteredUsers.map((ele) => {
                return <Card imgsrc={ele.avatar_url} login={ele.login}></Card>
            })}
        </>
    );
}
export default Apis;