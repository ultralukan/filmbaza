const Film = (props) =>{
    const title = props.film.title
    const overview = props.film.overview
    const imgPath = `https://image.tmdb.org/t/p/w500${props.film.poster_path}`

    return(
        <li className='film'>
            <section>
                <header><h3>{title}</h3></header>
                <aside>
                    <img className='film-img' src={imgPath}/>
                </aside>
                <article className='overview'>
                    <strong>Описание: </strong> 
                    {overview}
                </article>
            </section>
        </li>
    )
}
export default Film;