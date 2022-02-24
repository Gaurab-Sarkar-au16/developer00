import {Link} from "react-router-dom";
import user from "../images/user.jpg";
{/* use of Semantic UI */}

const ContactDetail = (props) => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user"/>
        </div>
        <div className="content">
          <div className="header">ShivBaba</div>
          <div className="description">shivbaba@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
