import HeaderBox from '@/components/HeaderBox';
import ProgressBox from '@/components/ProgressBox';
import RightSideBar from '@/components/RightSideBar';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Andy',
    lastName: 'Llerena',
    email: 'andyllerena@gmail.com',
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Your journey to mastery starts here."
          />
          <ProgressBox
            totalProblems={75}
            completedProblems={40} // Example value, can be dynamic
            progressPercentage={(36 / 75) * 100} // Calculate percentage dynamically
          />
        </header>
        RECENT HISTORY
      </div>

      <RightSideBar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
