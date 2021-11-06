import { useState, useEffect } from "react"
import Film from './Film'
import Page from '../src/stores/page'
import {observer} from 'mobx-react'

const Main = observer((props) =>{
    const [filmList, setFilmList] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY
    // const [page, setPage] = useState(Page.get())
    let cur_page = Page.get()
    let URL = `https://api.themoviedb.org/3/movie/popular?language=ru&page=${cur_page}&api_key=${API_KEY}`
    useEffect(()=>{
        fetch(URL)
            .then(response => response.json())
            .then(json => setFilmList(json['results']))
            .catch(error => console.log(error.message));
    })


    return(
        <main>
            <ul>
                {filmList.map(film => {
                    return <Film key={film.title} film={film}/>
                })}
            </ul>
        </main>
    )
}
)
export default Main;