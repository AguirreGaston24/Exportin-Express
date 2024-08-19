import { React, useEffect } from "react";
import FormModalContactDataComponent from "../components/mainComponents/home/FormModalContactDataComponent";

const HomePage = () => {
  
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
