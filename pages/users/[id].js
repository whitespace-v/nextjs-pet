import {useRouter} from "next/router";
import MainContainer from "../../Compontents/MainContainer";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContainer title={`Пользователь ${user.name}`} keywords={user.name}>
            <h1>
                Пользователь {query.id}
            </h1>
            <h2>Имя: {user.name}</h2>
        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}