import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p>
          <Link to="/privacy-policy" className="hover:underline text-primary">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms-of-service" className="hover:underline text-primary">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
