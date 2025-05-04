const About = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="mb-4">
          aplikasi to do list simpel dengan:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>React (Frontend)</li>
          <li>Tailwind CSS (Styling)</li>
          <li>Express.js (Backend)</li>
          <li>PostgreSQL (Database)</li>
        </ul>
      </div>
    );
  };
  
  export default About;