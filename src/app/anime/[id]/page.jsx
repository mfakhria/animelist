import { getAnimeResponse } from "../../../libs/api-libs";
import VideoPlayer from "../../../components/utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      {/* title */}
        <div className="px-4 pt-3">
            <h3 className="text-color-primary text-2xl">
            {anime.data.title} - {anime.data.year}
            </h3>
        </div>

        {/* Detail Anime */}
        <div className="flex px-4 pt-1 gap-2 text-color-primary overflow-x-auto">
            <div className="w-32 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h4>
                Rank
                <p>#{anime.data.rank}</p>
            </h4>
            </div>
            <div className="w-32 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h4>
                Score
                <p>{anime.data.score}</p>
            </h4>
            </div>
            <div className="w-32 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h4>
                Episodes
                <p>#{anime.data.episodes}</p>
            </h4>
            </div>
            <div className="w-32 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h4>
                Duration:
                <p>{anime.data.duration}</p>
            </h4>
            </div>
        </div>

        {/* image */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 px-4 pt-3">
            <Image
            className="w-full rounded object-cover"
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            />
            <p className="text-color-primary text-justify text-md">
            {anime.data.synopsis}
            </p>
        </div>

        {/* Video Player */}
        <div>
            <VideoPlayer youtubeID={anime.data.trailer.youtube_id}/>
        </div>
        </>


    );
};

export default Page;
