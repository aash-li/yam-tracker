import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '357512393104-vub6iq2i0jfssetegu41d9rkktgjtdk2.apps.googleusercontent.com' //insert client id here

function Logout(props) {
  const [clickedLogoutButton, setClickedLogoutButton] = useState(false)

  const onSuccess = () => {
    console.log('Logout made successfully');
    props.setLoggedIn(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;