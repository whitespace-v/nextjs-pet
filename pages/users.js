import {useState} from "react";
import Link from "next/link";
import MainContainer from "../Compontents/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer title={'Страница пользователей'} keywords={'Название компании пользователи список'}>
            <div>
                <ul>
                    {users.map(u =>
                        <li key={u.id}>
                            <Link href={`/users/${u.id}`} >
                                <p>{u.name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users}
    }
}