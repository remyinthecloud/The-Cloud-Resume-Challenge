import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    let isMounted = true; // Prevent updates if the component unmounts

    const updateCounter = async () => {
      try {
        const response = await fetch(
          "https://nxvtfqdljcrvm4tn4tv4snjppa0yylyn.lambda-url.us-east-1.on.aws/"
        );
        const data = await response.json();
        if (isMounted) {
          setViewCount(data);
        }
      } catch (error) {
        console.error("Error fetching the counter value:", error);
        if (isMounted) {
          setViewCount("Error");
        }
      }
    };

    updateCounter();

    return () => {
      isMounted = false; // Cleanup to avoid state updates on unmounted components
    };
  }, []);

  return (
    <section className="py-24" id="hero">
      <h1 className="text-4xl text-center">Welcome to My Portfolio</h1>
      <p className="text-center mt-4">
        You are the view number{" "}
        <span className="counter-number">
          {viewCount !== null ? viewCount : "Loading..."}
        </span>
      </p>
    </section>
  );
};

export default HeroSection;
