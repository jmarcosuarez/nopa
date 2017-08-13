import React from 'react';
import { Link } from 'react-router';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';

const HomePage = () => (
  <Layout title="Welcome to Nopa!">
    <div className="main-content">
      <div className="logo">
        <Link to={Paths.HOME} title="Home" className="">
          <img className="Nopa" alt="Logo" src={require('../../../static/images/Logo_Nopa.svg')} />
        </Link>
      </div>

      <h1>Your finances, in one place</h1>
      <p>Track all of your payments by connecting as many bank accounts as<br />
           you&#39;d like to your Nopa account and get updates on your balance instantly.</p>

      <Button to={Paths.CHOOSE_BANK} className="button">Get started</Button>
    </div>

    <div className="secondary-content">
      <div>
        <div>
          <h1>
            There is no such things as &quot;one size fits all&quot; finance.
          </h1>
          <p>
            We were founded to make money simple and fair for everyone:
            whether you are looking for a loan, or to get better rewards for your investments.
          </p>
        </div>
        <div>
          <img className="shapes" alt="Shapes" src={require('../../../static/images/Shapes.png')} />
        </div>
      </div>
    </div>

  </Layout>
  );

export default HomePage;
