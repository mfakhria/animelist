"use client";

import AnimeList from "../../components/AnimeList"
import HeaderMenu from "../../components/utilities/HeaderMenu";
import Pagination from "../../components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";


// Halaman
const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    // Ambil API dari api-libs.js
    const fetchData = async () => {
        const PopulerAnime = await getAnimeResponse("top/anime", `page=${page}`);
        setTopAnime(PopulerAnime);
    };

    useEffect(() => {
        fetchData();
    }, [page]);


    return (
        <>
        {/* Ambil function dari HeaderMenu di utilities */}
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />

        {/* Ambil function dari AnimeList untuk isi dari halaman populer */}
        <AnimeList api={topAnime} />

        {/* PAGINATION (NEXT-PREV) */}
        <Pagination
            page={page}
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
        />
        </>
    );
};

export default Page;
