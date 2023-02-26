import { Link } from "react-router-dom";
import React, { useState } from 'react';


const ChildLogin = ({onLetterClick}) => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const [selectedLetter, setSelectedLetter] = useState(null);
      
        const handleLetterClick = (letter) => {
          setSelectedLetter(letter);
        };
      
        const SelectedLetter = ({ letter }) => {
          return <div className="selected-letter">{letter}</div>;
        };
      
        return (
          <div className="keyboard">
            {letters.map((letter) => (
              <LetterBlock key={letter} letter={letter} onClick={handleLetterClick} />
            ))}
            {selectedLetter && <SelectedLetter letter={selectedLetter} />}
          </div>
        );
      };
      
      const LetterBlock = ({ letter, onClick }) => {
        return (
          <div className="letter-block" onClick={() => onClick(letter)}>
            {letter}
          </div>
        );
      };
      
// "Hi there!"
// "Do you want to some play some games with us? or do you just want to play on your own?"
// {Option for guides games or Free Play} -- Buttons? 
// {When guided games is selected}

// "How do you spell your name?" {alphabet blocks for a keyboard}
// "Great job, {child name}!"
// "It's {Day of the week} today!"
// "Today's Letter is {Letter of the Day}! Do you know what starts with {Letter of the day}?" 
// {Picture of something that start with Letter of the day}
// "Let's get ready for the day!"
// Pick your outfit for the day!
// {Options for Boy or Girl avatar including: 
// skin Tones,
// clothes, 
// shoes


export default ChildLogin;