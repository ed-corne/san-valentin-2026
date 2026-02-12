import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiHeart } from "react-icons/ti";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isRoot = location.pathname === "/";

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center gap-3 px-3 py-3 sm:px-6">
          {!isRoot && (
            <button
              onClick={() => navigate(-1)}
              className="
                h-10 w-10
                flex items-center justify-center
                rounded-full
                bg-white text-[#5b4636]
                active:scale-95
                transition
              "
              aria-label="Volver"
            >
              <IoMdArrowRoundBack size={22} />
            </button>
          )}
          <div className="text-[#5b4636] flex items-center gap-2">
            <h2
              className={`text-base font-extrabold sm:text-lg ${
                isRoot ? "mx-auto" : ""
              }`}
            >
              San Valentín App
            </h2>
            <TiHeart size={22} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex px-4 py-4 sm:px-8 ">
        <Outlet />
      </main>
    </div>
  );
}
