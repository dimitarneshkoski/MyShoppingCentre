import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/Authentication-context";
import classes from "./ProfileForm.module.css";
import CheckIcon from "@mui/icons-material/Check";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDr7K2n4mjIbHfTGp9D0ueK7FjXQw6j4Ig",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">Change Your Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          placeholder="**New Password**"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>
          <span className={classes.changePassBtnAdjust}>Change Password </span>
          <CheckIcon />
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
