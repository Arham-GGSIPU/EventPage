import React from 'react';

const events = [
  {
    src: '../../public/bg0.jpg',
    heading: 'Plantation Drive',
    description: 'Join us in making the planet greener. Be a part of the plantation drive!',
  },
  {
    src: '../../public/bg1.jpg',
    heading: 'Beach Cleanup',
    description: 'Help us clean the beaches and preserve marine life for a better tomorrow.',
  },
  {
    src: '../../public/bg2.jpg',
    heading: 'Community Workshop',
    description: 'Engage in a hands-on workshop and learn new skills with the community.',
  },
  {
    src: '../../public/bg3.jpg',
    heading: 'Charity Run',
    description: 'Participate in our charity run and support underprivileged children.',
  },
  {
    src: '../../public/bg4.jpg',
    heading: 'Art Exhibition',
    description: 'Explore stunning art pieces from talented artists around the globe.',
  },
];

const EventPage = () => {
  return (
    <div className="p-8 rounded-md w-full max-w-6xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6">Events</h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#232E26] rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={event.src}
              alt={event.heading}
              className="w-full md:w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6 transition-transform duration-300"
            />
            <div className="transition-transform duration-300">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white hover:text-3xl transition-all">
                {event.heading}
              </h2>
              <p className="text-white hover:text-lg transition-all">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
