import React from 'react';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';

const bankList = [{
  name: 'Barclays',
  logo: require('../../../static/images/Barclays.png'),
},
{
  name: 'Natwest',
  logo: require('../../../static/images/LogoNatwest.png'),
},
{
  name: 'Lloyds',
  logo: require('../../../static/images/LogoLloyds.png'),
},
{
  name: 'HSBC',
  logo: require('../../../static/images/LogoHSBC.png'),
},
{
  name: 'TSB',
  logo: require('../../../static/images/LogoTSB.png'),
},
{
  name: 'Santander',
  logo: require('../../../static/images/LogoSantander.png'),
},
];

const ChooseBankPage = props => (
  <Layout title="Choose your bank!">
    <div className="main-content">
      <h1>Which bank does this account belong to?</h1>
      <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
          account and get updates on your balance instantly.</p>

      <div className="bank-list">
        {
              bankList.map((bank, index) => <div key={index}><img alt={bank.name} src={bank.logo} /></div>)
            }
      </div>

      <Button to={Paths.LOGIN_BANK} className="button">Get started</Button>

    </div>
  </Layout>
  );

export default ChooseBankPage;
