import React, {useState, useEffect} from 'react';

import style from './FeaturedShow.module.css'

function FeaturedShow() {


    const API_KEY = '3fe2e939ae006821cfab6885c67aa6e6'
    useEffect(() => {
        const data = getFeaturedShow();
    }, [])

    const [featuredShow, setFeaturedShow] = useState([]);
    const [date, setDate] = useState([]);
    const [nbSeason, setNbSeason] = useState([]);
    const [showSeason, setShowSeason] = useState([])
    const [genres, setGenres] = useState([])
    const [desc, setDesc] = useState("");


    const getFeaturedShow = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
        const data = await response.json()
        let alea = (Math.random() * 21).toFixed(0)
        let date = (data.results[alea].first_air_date).slice(0, 4)

        setDate(date)
        setFeaturedShow(data.results[alea])


        const desc = data.results[alea].overview

        if (desc.length >= 250) {
             setDesc(desc.slice(0, 250) + '...');
        }
        setDesc(desc)
        const details = getDetails(data.results[alea].id);
    }

    const getDetails = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
        const data = await response.json()

        setNbSeason(data.number_of_seasons)
        if (data.number_of_seasons > 1) {
            setShowSeason('Seasons')
        } else {
            setShowSeason('Season')
        }

        let genres = []
        for (let i in data.genres) {
            genres.push(data.genres[i].name)
        }
        setGenres(genres)


    }


    return (

        <section className={style.featured} style={{
            backgroundImage: `linear-gradient(90deg,#111 30%,transparent 70%), url("https://image.tmdb.org/t/p/original${featuredShow.backdrop_path}"`

        }}>
            <div className={style.featuredVertical}>
                <div className={style.featuredHorizontal}>
                    <div className={style.featuredName}>{featuredShow.original_name}</div>
                    <div className={style.featuredInfo}>
                        <div className={style.featuredPoints}>{featuredShow.vote_average}</div>
                        <div className={style.featuredYear}>{date}</div>
                        <div className={style.featuredSeasons}>{nbSeason + ' ' + showSeason} </div>
                    </div>
                    <div className={style.featuredDescription}>{desc}</div>
                    <div className={style.featuredButtons}>

                        <a className={style.watchButton}>
                            <div className={style.buttonContainer}>
                                <svg className={style.MuiSvgIconRoot} focusable="false" viewBox="0 0 24 24"
                                     aria-hidden="true">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                                Watch
                            </div>
                        </a>

                        <a className={style.listButton}>
                            <div className={style.buttonContainer}>
                                <svg className={style.MuiSvgIconRoot2} focusable="false" viewBox="0 0 24 24"
                                     aria-hidden="true">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                </svg>
                                My List
                            </div>
                        </a>

                    </div>
                    <div className={style.featuredGenres}>{genres.join(', ')}</div>

                </div>
            </div>
        </section>

    );
}

export default FeaturedShow