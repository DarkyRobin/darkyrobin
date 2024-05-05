import React from 'react';
import viveImage from '../assets/vive.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={viveImage} alt="Vive" className="w-96 h-96 rounded-full object-cover mb-6" />
      <h1 className="text-4xl font-bold mb-6">Hi, I'm Vive</h1>
      <p className="text-lg">I am a Full Stack Developer.</p>
      {/* Add more content or call-to-action here */}
    </div>
  );
}

export default Home;
