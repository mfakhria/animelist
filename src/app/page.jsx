import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { RandomData, getAnimeResponse, getNestedAnimeResponse } from "../libs/api-libs";

const Page = async () => {
  
  // Ambil API getAnimeResponse di api-libs.js
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  // Ambil API getNestedAnimeResponse dan RandomData di api-libs.js
  let RekomendasiAnime = await getNestedAnimeResponse("recommendations/anime","entry");
  RekomendasiAnime = RandomData(RekomendasiAnime, 4)

   {/* Section Homepage */}
  return (
    <>

    {/* Paling populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={RekomendasiAnime} />
      </section>
    </>
  );
};

export default Page;
