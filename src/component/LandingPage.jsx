import { Link } from "react-router-dom";
import '../style/LandingPage.css';
import userlogo from '../picture/key.png';
import merchantlogo from '../picture/—Pngtree—merchant consumer icon use_5458366.png';

const LandingPage = () => {
  return (
    <div className="landingpage">
      
      <section class="home user-home">
        <div className="userzom">
          <Link to="/userlogin">
            <img src={userlogo} alt="" srcset="" />
          </Link>
        </div>
        <h1>Welcome, User!</h1>
        <p>Explore products and services.</p>
        <div className="user">
          <Link to="/userlogin">
            <h4>Go to User Dashboard</h4>
          </Link>
        </div>
      </section>


      <section class="home merchant-home">
        <div className="merchantzoom">
          <Link to="/merchantlogin">

            <img src={merchantlogo} alt="" srcset="" />
          </Link>
        </div>
        <h1>Welcome, Merchant!</h1>
        <p>Manage your products and services.</p>
        <div className="merchant">
          <Link to="/merchantlogin">

            <h4>Go to Merchant Dashboard</h4>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default LandingPage;