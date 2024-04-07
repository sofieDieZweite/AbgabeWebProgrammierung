import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Kommentare = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Kommentare werden aus Server abgerufen
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/comments');

          setComments(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Kommentare:', error);
      }
    };

    fetchComments();
  }, []);
  //beschreibt den Aufbau vom Teil der Kommentarseite, der bereits vorhandene Kommentare darstellt
  return (
    <div>
      <div className='kommentar-headline'>
        <h2 >Alle Kommentare</h2>
      </div>
      <div className='alte-kommentare-block'>
            {comments.map((comment, index) => (
            <div className='alte-kommentare' key={index}>
                <div>{comment.author}</div>
                <div>{comment.content}</div>
                </div>
                ))}
      </div>
    </div>
  );
};

export default Kommentare;