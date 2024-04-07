import React, { useState } from 'react';
import axios from 'axios';

const KommentarFeld = () => {
    // Zustände für Kommentare
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    
    // Fügt neue Kommentare zum server hinzu
    const AddComment = async () => {
      const newComment = {
        author: author,
        content: content
      };
  
      try {
        // Sende eine Anfrage an den Backend-Server mit dem neuen Kommentar
        const response = await axios.post('http://localhost:5000/api/comments', newComment);
        console.log('Kommentar wurde erfolgreich hinzugefügt:', response.data);
        // aktualisiert die Bedienoberfläche
        window.location.reload();
      } catch (error) {
        console.error('Fehler beim Hinzufügen des Kommentars:', error);
  
      }
    };
    
//beschreibt den Teil der Kommentarseite, der die Eingabe neuer Kommentare darstellt
    return (<>
          <div className="kommentar-eingabe">
              <div className='grid-container'>
                  <div><input className="inputfield" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="dein Name" /></div>
                  <div><input className="inputfield" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Kommentar" /></div>
              <div/>
              
              </div>
              <div className="btn-kommentar">
                            <button className="btn-event" onClick={AddComment}>Kommentieren</button></div>
          </div>
      </>
    );
  };
  
  export default KommentarFeld;