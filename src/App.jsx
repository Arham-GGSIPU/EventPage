import React from 'react';
import 'tailwindcss/tailwind.css';
import Carousel from './components/Carousel';
import EventPage from './components/EventsPage';

const App = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-[#D9EFDE] p-5 pt-7 ">
      <Carousel />
      <EventPage />
    </div>
  );
};

export default App;
