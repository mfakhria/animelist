import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex p-4 justify-between items-center">
    
      {/* Title header */}
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
      
      // Link Href (Lihat semua)
        <Link
          href={linkHref}
          className="md-text xl text sm underline hover:text-color-accent transition-all text-color-primary"
        >
      {/* Link Title Anime */}
          {linkTitle}
        </Link>

      ) : null}
    </div>
  );
};
export default Header;
