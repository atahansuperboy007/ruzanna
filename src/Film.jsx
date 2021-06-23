import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Film(){
    const { id } = useParams()

    const link = 'https://image.tmdb.org/t/p/w500'

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
        .then(res => res.json())
        .then(data => {
            setMovie(data)
        })
    },[])

    console.log(movie)

    if (!movie) return null

    let gen =""
    for (let i of movie.genres) 
    gen+= i.name+", ";

    let production_companies =""
    for (let i of movie.production_companies) 
    production_companies+= i.name+", ";

    let production_countries = ""
    for (let i of movie.production_countries)
    production_countries+= i.name + ", "

    return(
        <div className="movie">
            <img src={link + movie.poster_path} alt="" />
            <div className="movie-text">
                <h1>Название: {movie.title},</h1>
                <p>Оригинальное название: {movie.original_title},</p>
                <p>Жанры: {gen}</p>
                <p>Дата выхода: {movie.release_date},</p>
                <p>Страна: {production_countries}</p>
                <p>Фильм создан с компаниями: {production_companies}</p>
                <p>Продолжительность: {movie.runtime} мин,</p>
                <p>Оценка: {movie.vote_average},</p>
                <p>Описание: <br />{movie.overview}</p>
            </div>
        </div>
    )
}

export default Film;