import { Link } from "react-router-dom";
import Dialog from "../components/Dialog";
import { BsHeartArrow } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 pt-15 gap-6 text-center">
        <Dialog
          title={"San Valentin esta cerca..."}
          text={
            "y tengo una pregunta importante pero para desbloquearla tienes que pasar los retos del conijito cozy"
          }
        />

        <Link
          to="menu"
          className="
            inline-block
            px-6 py-3 mt-6
            rounded-2xl
            bg-[#5b4636] text-white
            font-medium
            shadow
           
          "
        >
          <div className="flex gap-4">
            <span> Vamos </span>
            <BsHeartArrow size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
}
