import React, { useEffect } from "react";

function Layout({ children, title = "Home" }) {
  useEffect(() => {
    document.title = "Gallery Books | " + title;
  }, []);
  return <div>{children}</div>;
}

export default Layout;
