import  style  from "./Header.module.css"
import { Search } from "../Search/Search"
import { User } from '../User/User'

export const Header=() => {
    return (
        <div className={style.header}>
            <div className={style.pixema}>
                <a className={style.pix}>pix</a>
                <a className={style.ema}>ema</a>
            </div>
            <Search />
            <User />
        </div>
    )
}