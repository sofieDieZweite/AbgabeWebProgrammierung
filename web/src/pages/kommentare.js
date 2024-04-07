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

  return (
    <div>
      <h2>Alle Kommentare</h2>
      <table>
        <thead>
            <tr>
            <th>Autor</th> 
            <th>Kommentar</th>
            </tr>
        </thead>
        <tbody>   
            {comments.map((comment, index) => (
            <tr key={index}>
                <td>{comment.author}</td>
                <td>{comment.content}</td>
                </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kommentare;