import React from 'react';
import { Layout, LoginForm } from '../../components';
import styles from './Login.css';

const LoginPage = () => (
  <Layout>
    <div className={styles.main}>
      <h1>Which bank does this account belong to?</h1>
      <p>Track all of your payments by connecting as many bank accounts as you&#39;d<br />
          like to your Nopa account and get updates on your balance instantly. Plus it&#39;s free.</p>

      <LoginForm
        handleChange={() => {}}
        handleSubmit={() => {}}
        errors={{}}
      />
    </div>
  </Layout>
  );

export default LoginPage;
