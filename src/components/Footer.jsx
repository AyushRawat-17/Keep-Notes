import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Ayush Rawat</p>
    </footer>
  );
}

export default Footer;
