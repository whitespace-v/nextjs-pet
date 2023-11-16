import Link from "next/link";
import A from "../Compontents/A";
import Head from "next/head";
import MainContainer from "../Compontents/MainContainer";

const Index = () => {
    return (
        <MainContainer title={'Главная страница'} keywords={'Название компании'}>
            <div>
                <h1>Main page</h1>
            </div>
        </MainContainer>
    );
};

export default Index;