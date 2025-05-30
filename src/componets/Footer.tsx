import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} CodeWithAbdiko. All rights reserved.
        </p>
        <FaFacebook
          onClick={() =>
            window.open(
              "https://web.facebook.com/Abdulhaqqii.mustafa",
              "_blank"
            )
          }
          className="inline-block mx-2 text-primary  cursor-pointer"
        />
        <FaTwitter
          onClick={() => window.open("https://x.com/Abdulaki91", "_blank")}
          className="inline-block mx-2 text-primary cursor-pointer"
        />
        <FaTelegram
          onClick={() => window.open("https://t.me/abex91", "_blank")}
          className="inline-block mx-2 text-primary cursor-pointer"
        />
      </div>
    </footer>
  );
}
