import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Star from "@/components/Star";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="text-center">
        <Star className="mx-auto h-10 w-10 text-brass" />
        <p className="mt-8 font-display text-7xl text-ink">404</p>
        <p className="mt-3 font-sans text-lg text-ink-mute">This page wandered off the path.</p>
        <a
          href="/"
          className="no-rule mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-sans text-base font-semibold text-paper transition-colors hover:bg-teal-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
