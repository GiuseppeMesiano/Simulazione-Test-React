import React, { useState } from 'react';

function Header({ setActiveSection }) {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <button
            onClick={() => setActiveSection('biografia')}
            className="text-white hover:text-gray-300"
          >
            Biografia
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('skills')}
            className="text-white hover:text-gray-300"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('contatti')}
            className="text-white hover:text-gray-300"
          >
            Contatti
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Biography() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Biografia</h2>
      <p>Mi chiamo Giuseppe Mesiano ho 23 anni e abito a Milano,ho conseguito gli studi presso la scuola alberghiera e dopo anni di lavoro nella ristorazione ho capito che non era la strada giusta per me,adesso sto entrando nel mondo della programmazione imparando e cercando di diventare un full stack web developer.</p>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul>
        <li className="mb-2">HTML</li>
        <li className="mb-2">CSS</li>
        <li className="mb-2">JavaScript</li>
        <li className="mb-2">React</li>
        
      </ul>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contatti</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Invia
        </button>
      </form>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('biografia');

  return (
    <div>
      <Header setActiveSection={setActiveSection} />

      {activeSection === 'biografia' && <Biography />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'contatti' && <ContactForm />}
    </div>
  );
}

export default App;
