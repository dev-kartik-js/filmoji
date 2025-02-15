import { useRef, useState } from "react";
import { CheckvalidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Sign_bg } from "../utils/constants";
import smbg from "../utils/images/smbg.jpeg";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handledbuttonClicked = async () => {
    if (!email.current || !password.current || (!isSignin && !name.current)) {
      seterrormsg("Please fill in all required fields.");
      return;
    }

    const message = CheckvalidData(email.current.value, password.current.value);
    seterrormsg(message);
    if (message) return;

    setIsLoading(true); // Start loading

    try {
      if (!isSignin) {
        // Sign-up flow
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;

        // Update profile with display name
        await updateProfile(user, {
          displayName: name.current.value,
          
        });

        // Dispatch user data to Redux
        const { uid, email: userEmail, displayName } = auth.currentUser;
        dispatch(addUser({ uid, email: userEmail, displayName }));
      } else {
        // Sign-in flow
        const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;
      }
    } catch (error) {
      seterrormsg(error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const togglesignin = () => {
    setisSignin(!isSignin);
  };

  return (
    <div>
      {/* Background Image */}
      <div className="bg-black relative w-full h-screen overflow-hidden">
        {/* Large screen image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50 hidden sm:block"
          src={Sign_bg}
          alt="Login background"
        />

        {/* Mobile screen image */}
        <img
          className="absolute bg-fixed inset-0 w-full h-full object-cover opacity-50 sm:hidden"
          src={smbg}
          alt="Login background"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 md:bg-gradient-to-t md:from-black md:via-transparent md:to-black"></div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-[500px] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 py-8 px-10 max-w-[400px] w-full sm:w-52 md:w-[400px] lg:w-[500px] xl:w-[600px] rounded-md"
      >
        <h1 className="w-full h-12 mb-4 rounded-md bg-white text-transparent font-bold text-3xl px-2 py-2 bg-gradient-to-r from-gray-400 to-yellow-300 bg-clip-text ">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            className="w-full h-12 mb-4 px-4 rounded-md bg-black text-white border border-white opacity-80"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full h-12 mb-4 px-4 rounded-md bg-black text-white border border-white opacity-80"
          type="text"
          placeholder="Enter Email Address..."
        />
        <input
          ref={password}
          className="w-full h-12 mb-4 px-4 rounded-md bg-black text-white border border-white opacity-80"
          type="password"
          placeholder={!isSignin ? "Create Password" : "Password"}
        />
        <p className="text-red-600">{errormsg}</p>
        <button
          onClick={handledbuttonClicked}
          className="w-full h-12 mb-4 rounded-md bg-white text-transparent font-bold text-2xl px-6 py-2 bg-gradient-to-r from-gray-400 to-yellow-300 bg-clip-text border-2 flex items-center justify-center"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white sm:h-8 sm:w-8"></div> // Responsive spinner
          ) : (
            isSignin ? "Sign In" : "Sign Up"
          )}
        </button>
        {isSignin && <h3 className="text-center text-white mb-4">OR</h3>}

        {isSignin && (
          <p className="text-center text-white mt-4 hover:underline cursor-pointer">
            Forget password?
          </p>
        )}
        
        <p
          onClick={togglesignin}
          className="text-center text-gray-300 mt-4 hover:underline cursor-pointer"
        >
          {isSignin ? "New to FILMOJI? " : "Already have an accout? "}
          <span className="font-bold text-white">{!isSignin ? "Sign In" : "Sign Up Now."}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;