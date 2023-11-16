import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keywords={"машина авто автомобиль" + keywords}/>
            </Head>
            <div>
                <A text={'users'} href={'/users'}/>
                <A text={'main'} href={'/'}/>
            </div>
            <div>
                {children}
            </div>
        </div>

    );
};

export default MainContainer;