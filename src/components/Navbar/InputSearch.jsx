    "use client";
    import { MagnifyingGlass } from "@phosphor-icons/react";
    import { useRouter } from "next/navigation";
    import { useRef } from "react";

const InputSearch = () => {
    // Logika Search
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        const keyword = searchRef.current.value;

        // Jika tidak ada text di Search maka tidak bisa di enter ataupun di klik, (space) pun tidak bisa
        if (!keyword || keyword.trim() == "" ) 
        
        // Agar bisa di "Enter"
        return
        if (event.key === "Enter" || event.type === "click") {
        event.preventDefault();
        router.push(`/search/${keyword}`);
        }
    };

    // Halaman Search di Navbar
    return (
        <div className="relative">
        <input
            placeholder="Cari Anime..."
            className="p-2 rounded w-full"
            ref={searchRef}
            onKeyDown={handleSearch}
        ></input>

        <button className="absolute top-1.5 end-2" onClick={handleSearch}>
            <MagnifyingGlass size={25} />
        </button>
        </div>
    );
    };

    export default InputSearch;
