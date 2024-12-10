import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>
        <AccountCircleIcon sx={{ fontSize: 60 }} />
        <span className={classes.title}> Your User Profile</span>
      </h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
