"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeID }) => {

    // Membuat fungsi buka tutup Video Player
    const [isOpen, setISOpen] = useState(true);
    const handleVideoPlayer = () => {
        setISOpen((prevState) => !prevState);
    };

    // Membuat fungsi option width dan height pada library react-youtube
    const option = {
        width: "300",
        height: "250",
    };
    // Membuat Fungsi Video Player
    const Player = () => {
        return (
        <div className="fixed bottom-2 right-2">
            <button
            onClick={handleVideoPlayer}
            className="text-color-dark float-right bg-color-primary px-3 mb-1"
            >
            X
            </button>
            <YouTube
            videoId={youtubeID}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            onError={() => alert("Video is Broken, please try another.")}
            />
        </div>
        );
    };

    // Membuat Fungsi Button Open
    const ButtonOpenTrailer = () => {
        return (
        <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
        >
            Tonton Trailer
        </button>
        );
    };

    return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
