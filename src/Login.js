import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '357512393104-vub6iq2i0jfssetegu41d9rkktgjtdk2.apps.googleusercontent.com' //insert client id here

// props: onSuccess: stores the user ID in the App function and updates to the database
function Login(props) {
  const [clickedLoginButton, setClickedLoginButton] = useState(false)
  const [name, setName] = useState()

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    props.onSuccess(res.profileObj);
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setName(res.profileObj.name)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login 😢. Please try again`
    );
  };

  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
