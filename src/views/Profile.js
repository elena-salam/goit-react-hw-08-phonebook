import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
// import userImage from '../assets/blank-profile-picture-973460.png';
import styles from './styles/Profile.module.css';

const Profile = ({user: {name, email}, onLogout}) => {
  const avatar = "https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=150";
  return <section className={styles.profile}>
      <img className={styles.profileImage} src={avatar} alt="user"/>
      <ul className={styles.profileList}>
          <li className={styles.profileListItem}><strong>Name:</strong> {name}</li>
          <li className={styles.profileListItem}><strong>Email:</strong> {email}</li>
      </ul>
      <button className={styles.profileButton} type="button" onClick={onLogout}>Logout</button>
  </section>;
};

const mapStateToProps = state => ({
  user: authSelectors.getUserInfo(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);