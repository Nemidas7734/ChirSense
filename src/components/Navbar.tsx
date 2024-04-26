import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
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
            <Link to="/readmore">
            <img
              src="reading_5065126.png"
              width={35}
              height={35}
              className="inline"
            />
            </Link>
          </li>
          {userLoggedIn ? 
          <>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded-xl hover:bg-green-500 transform duration-300 "
                onClick={() => { doSignOut().then(() => { navigate('/login') }) }}
                type="button"
              >
                LogOut
              </button>
          </>:
          <>
          <Link to="/login">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded-xl hover:bg-green-500 transform duration-300 "
              // onClick={openFileExplorer}
              type="button"
            >
              Login
            </button>
          </Link>
          </>
          }
 
        </ul>
      </div>
    </>
  );
}
