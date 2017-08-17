import React from 'react';
import { Layout } from '../../components';
import EnhancedForm from './Revalidation';
import styles from './Login.css';

const LoginPage = props => (
  <Layout>
    <div className={styles.main}>
      <h1>Which bank does this account belong to?</h1>
      <p>Track all of your payments by connecting as many bank accounts as you&#39;d<br />
          like to your Nopa account and get updates on your balance instantly. Plus it&#39;s free.</p>

      {/*
        <LoginForm
        form
        handleChange={() => {}}
        handleSubmit={() => {}}
        errors={{}}
      />

      <LoginForm initialState={props.initialState} />

    */}
      
      <EnhancedForm
        values={{
          surname: '', 
          sortCode: '',
          accountNumber: '',
          passCode: '',
          memorableWord: '',
        }}
      /> 
    
    </div>
  </Layout>
  );

export default LoginPage;
