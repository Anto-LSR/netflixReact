import React, {useState, useEffect} from 'react';
import style from './Row.module.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Row(props) {
    const API_KEY = '3fe2e939ae006821cfab6885c67aa6e6'

    useEffect(() => {
        if (props.type === 'netflix') {
            let toFetch = `https://api.themoviedb.org/3/discover/tv?with_network=213&language=fr-BR&api_key=${API_KEY}`;
            getMovieRow(props, toFetch);
        }
        if (props.type === 'recommended') {
            let toFetch = `https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=${API_KEY}`;
            getMovieRow(props, toFetch);
        }
        if (props.type === 'toprated') {
            let toFetch = `https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`;
            getMovieRow(props, toFetch);
        }
        if (props.type === 'doc') {
            let toFetch = `https://api.themoviedb.org/3/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`;
            getMovieRow(props, toFetch);
        }
        if (props.type === 'action') {
            let toFetch = `https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`;
            getMovieRow(props, toFetch);
        }

    }, [])

    const [shows, setShows] = useState([]);
    const [img, setImg] = useState('');


    const getMovieRow = async (props, toFetch) => {
        const response = await fetch(toFetch)
        const data = await response.json()


        setShows(data.results)


    }

    return (
        <div className={style.rowContainer}>
            <h1>{props.name}</h1>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        width: 320,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        //spaceBetween:50,
                    },
                    // when window width is >= 768px
                    460: {
                        width: 460,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween:20,
                    },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={9}
                slidesPerGroup={3}
                loop={true}

                navigation={{clickable: true}}

                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {shows.map(show =>
                    <SwiperSlide key={show.id}><img src={'https://image.tmdb.org/t/p/original' + show.poster_path} alt="Movie Title"
                                      className={style.itemImg} /></SwiperSlide>
                )}


            </Swiper>
        </div>
    )
}


export default Row