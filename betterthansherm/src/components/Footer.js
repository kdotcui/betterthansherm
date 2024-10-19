import React from "react";
// Footer Element
// Contains the html content of the footer
function Footer({ cookingMode }) {
  if (cookingMode) {
    return null;
  }
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <section className="Footer">
        <p
          id="BTS"
          style={{
            color: "#FFF",
            fontFamily: "Orelega One",
            fontSize: "29.4px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Better Than Sherm
        </p>
        <p>
          We are dedicated to share recipes for good food, and guaranteed that
          the food tastes better than Sherman food!
        </p>
        <div id="footersocials">
          <a
            href="https://www.facebook.com"
            className="fa fa-facebook social-icon"
            aria-label="Facebook"
          ></a>
          <a
            href="https://www.instagram.com/"
            className="fa fa-instagram social-icon"
            aria-label="Instagram"
          ></a>
          <a
            href="https://www.linkedin.com"
            className="fa fa-linkedin social-icon"
            aria-label="LinkedIn"
          ></a>
        </div>
        <p>Copyright @ 2024 Better than Sherm</p>
      </section>
      <section className="Footer">
        <p>Who are we?</p>
        <ul>
          <li>Josh Liu</li>
          <li>Jason Yang</li>
          <li>Kevin Cui</li>
          <li>Sherren Jie</li>
        </ul>
      </section>
      <section className="Footer">
        <p>Any Suggestions?</p>
        <p>betterthansherm@brandeis.edu</p>
        <p> +1 1234567890</p>
      </section>
    </footer>
  );
}

export default Footer;
