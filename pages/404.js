import A from "../Compontents/A";

export default function Error () {
    return <div>
        <div>
            Такой страницы не существует
        </div>
        <A href={'/'} text={'На главную'}/>
    </div>
}