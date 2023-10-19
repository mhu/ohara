import React from "react";

function Layout({ children }) {
  return (
    <div id="layout-container" class="p-4">
      {children}
    </div>
  );
}

export default Layout;
