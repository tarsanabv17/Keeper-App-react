import React from "react";
const yr = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright @ {yr}</p>
    </footer>
  );
}

export default Footer;
