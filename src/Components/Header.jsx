import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPT_Slice";

const Header = () => {
  const dispatch = useDispatch();
  const [togglefilmy, settogglefilmy] = useState(false);
  const [isHomepageButton, setIsHomepageButton] = useState(false); // State for toggling button
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const isAboutUsPage = location.pathname === "/aboutus"; // Check if on About Us page

  const handledSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (window.location.pathname === "/in") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/aboutus") {
          navigate("/in");
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const HandledGPT = () => {
    dispatch(toggleGptSearchView());
  };

  const handleToggleFilmy = () => {
    settogglefilmy(!togglefilmy);
  };

  const handleButtonClick = () => {
    if (isAboutUsPage) {
      // If on About Us page, redirect to /browse
      navigate("/browse");
    } else {
      // If not on About Us page, navigate to About Us
      navigate("/aboutus");
    }
  };

  return (
    <div className="bg-black top-0 w-full px-4 py-1 md:fixed z-50 flex flex-col md:flex-row justify-between items-center md:bg-gradient-to-b md:from-black md:bg-opacity-0 md:to-transparent">
      <img  className="w-40 md:w-56 cursor-pointer" src={Netflix_logo} alt="Netflix logo" onClick={() => navigate("/browse")}/>

      <div className="flex-col md:flex-row items-center md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        {user && !isAboutUsPage && ( // Hide these buttons on About Us page
          <>
            {/* Let's Get Filmy Button */}
            <button
              className="mr-2 py-2 px-2 font-bold bg-gradient-to-r from-gray-400 to-yellow-300 bg-clip-text text-transparent rounded-lg hover:bg-opacity-35 border-2"
              onClick={() => {
                HandledGPT();
                handleToggleFilmy();
              }}
            >
              {!togglefilmy ? "Let's get filmy" : "Homepage"}
            </button>

            {/* Sign Out Button */}
            <button
              onClick={handledSignout}
              className="mr-2 py-2 px-2 font-bold text-transparent bg-gradient-to-r from-gray-400 to-yellow-300 rounded-lg bg-clip-text border-2"
            >
              Sign Out
            </button>
          </>
        )}

        {/* About Us / Homepage Button */}
        <button
          onClick={handleButtonClick}
          className="py-2 px-2 font-bold text-transparent bg-gradient-to-r from-gray-400 to-yellow-300 rounded-lg bg-clip-text border-2"
        >
          {isAboutUsPage ? "Homepage" : "About Us"}
        </button>
      </div>
    </div>
  );
};

export default Header;