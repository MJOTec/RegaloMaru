import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showSanta, setShowSanta] = useState(false);

  const handleButtonClick = () => {
    setShowSanta(true);
    const audio = new Audio('/Christmas_Music.mp3'); // Asegúrate de tener un archivo de música llamado "Christmas_Music.mp3" en la carpeta public
    audio.play();
  };

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen flex flex-col items-center justify-between">
      <div className="w-full text-center py-12">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">
            ¡Wesołych Świąt Maru!
          </span>
          <span className="block text-indigo-500">
            ¡Feliz Navidad Maru!
          </span>
        </h2>
        {!showSanta ? (
          <div className="inline-flex rounded-md shadow mt-4 mb-4"> {/* Ajusta el margen superior e inferior */}
            <button
              type="button"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-sm font-extrabold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full sm:text-base"
              onClick={handleButtonClick}
            >
              ¡El botón rojo que hace piup!
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center mt-4 mb-4"> {/* Contenedor para centrar el iframe */}
            <div className="relative w-full" style={{ paddingBottom: '50%', maxWidth: '600px' }}> {/* Ajusta el paddingBottom para pantallas laptop */}
              <iframe
                src="https://giphy.com/embed/l2JhGa1nx4ir3zj20"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="Santa Dance"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default App;