import {observer} from 'mobx-react'
import Page from '../src/stores/page'

const Footer = observer(() =>{
    const handleClickNext = (value) =>{
        if (Page.page==10000){
            Page.set(0)
        }
        else Page.set(1)
    }
    const handleClickPrev = (value) =>{
        if (Page.page==1){
            Page.set(0)
        }
        else Page.set(-1)
    }
    return(
        <footer>
            <a href='#' onClick={handleClickPrev}>Назад</a>
            <a href='#' onClick={handleClickNext}>Вперед</a>
            {console.log(Page.page)}
        </footer>
    )
}
)

export default Footer;