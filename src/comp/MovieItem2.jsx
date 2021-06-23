function MovieItem2(props){

    return(
        <div className="movie-item">
            <img src={ props.data.poster_path} alt="" />
            <h1>{props.data.title}</h1>
        </div>
        
    )
}

export default MovieItem2;