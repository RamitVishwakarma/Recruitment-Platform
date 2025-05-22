import Google from "../../../assets/google-logo.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import app from "../../../utils/firebase";

export default function GoogleAuthentication({ text, btnStyle }) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const Data = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        axios
          .post(`${import.meta.env.VITE_URL}api/user/auth/google`, Data)
          .then((res) => {
            if (res.status == 200) {
              sessionStorage.setItem(
                "Authorization",
                res.headers["authorization"]
              );
              sessionStorage.setItem("userId", res.data._id);
              sessionStorage.setItem("name", res.data.name);
              sessionStorage.setItem("photo", res.data.photo);
              sessionStorage.setItem("domain", res.data.domain);
              sessionStorage.setItem("year", res.data.year);
              navigate("/user/");
            }
          })
          .catch((e) => {
            console.log(e);
            alert("Something went wrong with Google Authentication");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Cannot sign in with google please try again later");
      });
  };

  return (
    <button type="button" onClick={signInWithGoogle} className={btnStyle}>
      <img src={Google} />
      <span className="text-grey/60">{text}</span>
    </button>
  );
}
