import React, { useState } from 'react';

const studentsData = [
  { id: 1, fullname: "mario rossi", avg: 6, gender: 'm' },
  { id: 2, fullname: "luigi verdi", avg: 4, gender: 'm' },
  { id: 3, fullname: "peach pink", avg: 8, gender: 'f' },
  { id: 4, fullname: "wario rossi", avg: 9, gender: 'm' },
  { id: 5, fullname: "daisy princess", avg: 10, gender: 'f' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  function handleSearch() {
    const filtered = studentsData.filter(student =>
      student.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredStudents(filtered);
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Informazioni Studenti</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cerca per nome"
          className="p-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Cerca
        </button>
      </div>
      <div>
        {filteredStudents.length === 0 ? (
          <p className="text-red-500">Nessuno studente con questo nome</p>
        ) : (
          filteredStudents.map((student, index) => (
            <div
              key={student.id}
              className={`p-4 ${student.gender == 'm' ? 'bg-blue-200' : 'bg-pink-200'}`}
            >
              <p className="font-bold">Nome: {student.fullname}</p>
              <p>Media voti: {student.avg}</p>
              <p>Genere: {student.gender == 'm' ? 'Maschio' : 'Femmina'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
