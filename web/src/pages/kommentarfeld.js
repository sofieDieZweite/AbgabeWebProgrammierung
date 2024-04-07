import React, { useState } from 'react';
import axios from 'axios';

const KommentarFeld = () => {
    // Zustände für Buchdaten
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    
    // Event-Handler für das Hinzufügen von Büchern
    const AddComment = async () => {
      // Sammle die eingegebenen Buchdaten
      const newBook = {
        author: author,
        content: content
      };
  
      try {
        // Sende eine Anfrage an den Backend-Server mit den Wunschbücherdaten 
        const response = await axios.post('http://localhost:5000/api/comments', newBook);
        console.log('Kommentar wurde erfolgreich hinzugefügt:', response.data);
        // Die Benutzeroberfläche aktualisieren
        window.location.reload();
      } catch (error) {
        console.error('Fehler beim Hinzufügen des Kommentars:', error);
  
      }
    };
    
  
    return (<>
          <div className="container text-center">
              <div className="row">
                  <div className='col'><input className="inputfield" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="dein Name" /></div>
                  <div className='col'><input className="inputfield" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Kommentar" /></div>
              <div/>
              <div className="optionen-buttons">
                            <button className="btn-event" onClick={AddComment}>Kommentieren</button></div>
              </div>
          </div>
      </>
    );
  };
  
  export default KommentarFeld;