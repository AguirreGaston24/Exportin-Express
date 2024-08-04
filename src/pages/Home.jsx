import React from 'react';
import FormContactData from '../components/mainComponents/FormContactData';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Application</h1>
        <p>Your go-to platform for awesome features.</p>
      </header>
      
      <main>
        <section>
          <h2>Contact</h2>
          <FormContactData />
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;