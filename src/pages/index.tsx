import Head from "next/head";
import HomePage from "./HomePage";
import { useEffect, useState } from "react";
import BoardingScreen from "@/components/BoardingScreen";

export default function Home() {
  const [showBoarding, setShowBoarding] = useState(true);

  const handleNext = () => {
    setShowBoarding(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBoarding(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="relative">
      <Head>
        <title>Delicuts</title>
        <link rel="icon" href="../assets/images/delicuts.png" />
      </Head>
      {showBoarding && <BoardingScreen />}
      {!showBoarding && <HomePage />}
    </main>
  );
}
