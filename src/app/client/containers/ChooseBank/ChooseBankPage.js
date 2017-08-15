/* eslint-disable global-require */
import React from 'react';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';
import styles from './ChooseBank.css';

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

const ChooseBankPage = () => (
  <Layout title="Choose your bank!">
    <div className={styles.main}>
      <h1>Which bank does this account belong to?</h1>
      <p>Track all of your payments by connecting as many bank accounts as you&#39;d like to your Nopa<br />
          account and get updates on your balance instantly.</p>

      <div className={styles.bankList}>
        {
              bankList.map(bank => <div key={bank.name}><img alt={bank.name} src={bank.logo} /></div>)
            }
      </div>

      <Button to={Paths.LOGIN_BANK} className="button">Get started</Button>

    </div>
  </Layout>
  );

export default ChooseBankPage;
