import React, { useState, useEffect } from "react";
import { getTokenFunc } from "../firebase";

const DesktopNotifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);

  console.log("Token found", isTokenFound);

  // To load once
  useEffect(() => {
    async function tokenFunc() {
      getTokenFunc(
        "BJNYRgFb1K9JWAP9aCG0tkdBTtPEDK6UqJnZjxI74_RoX25FGTVbjQuDYbOsu0WllebENa144sOYSxD_2Mgmv2s"
      );
    }

    tokenFunc();
  }, [setTokenFound]);

  return <></>;
};

DesktopNotifications.propTypes = {};

export default DesktopNotifications;
