import { pageLinks, socialMedia } from "../data";
const Footer = () => {
  return (
    
    <footer className="section footer">
      <ul className="footer-links">
       {pageLinks.map((link) => {
        const {id, href, text} = link;
        return (
          <li key={id}>
        <a href={href} className="footer-link">{text}</a>
      </li>
        )
       })

       }
      </ul>
      <ul className="footer-icons">
       {socialMedia.map((data) => {
        const {id, href, icon} = data;
        return (
          <li key={id}>
          <a href={href} target="_blank" rer = 'noreferrer' className="footer-icon"
            ><i className={icon}></i
          ></a>
        </li>
        )
       })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer