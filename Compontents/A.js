import Link from "next/link";
import classes from '../styles/link.module.css'
const A = ({text, href}) => {
    return (
        <Link href={href} className={classes['link']}>
            <text>{text}</text>
        </Link>
    )
};

export default A;