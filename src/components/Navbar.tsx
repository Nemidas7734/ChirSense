import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="35322171_8_1sasa11.svg"
            width={65}
            height={65}
            className="inline"
          />
          <span className="text-3xl font-bold">Avian</span>
        </div>
        <ul className="flex gap-3">
          <li className="">
            <Link to="/">
              <img
                src="circle_14025055.png"
                width={35}
                height={35}
                className="inline"
              />
            </Link>
          </li>
          <li className="">
            <img
              src="reading_5065126.png"
              width={35}
              height={35}
              className="inline"
            />
          </li>
          <Link to="/login">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded-xl hover:bg-green-500 transform duration-300 "
              // onClick={openFileExplorer}
              type="button"
            >
              Login
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
}
