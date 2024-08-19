import React from "react";
import FormModalContactDataComponent from "../components/mainComponents/home/FormModalContactDataComponent";
import { useCalendly } from "../contexts/CalendlyContext";

const HomePage = () => {
  const calendlyWidget = useCalendly();

  useEffect(() => {
  }, [calendlyWidget]);
  
  return (
    <div>
      <header>
        <h1>Welcome to Our Application</h1>
        <p>Your go-to platform for awesome features.</p>
      </header>

      <main>
        <section>
          <h2>Contact</h2>
          <FormModalContactDataComponent />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
