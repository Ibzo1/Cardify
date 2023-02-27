import React from 'react'
import Dropdown from '../components/Dropdown';
import Searchbar from '../components/Searchbar';
import Flashcards from '../components/Flashcards';

export default function Flash() {
    const [lesson, setLesson] = React.useState('');
    const [specifics, setSpecifics] = React.useState('');
    const [view, setView] = React.useState(0);
    const [numFlashcards, setNumFlashcards] = React.useState(0);
    const [error, setError] = React.useState(null);

    const handleClick = () => {
        if (view === 0) {
            if (lesson.length > 0) setView(1);
            else setError('Please enter a lesson');
        } else if (view === 1) {
            setView(2);
        } else if (view === 2) {
            setView(3);
        }

    }

    return (
        <div style={{display:'flex'}}>
    

            {view === 0 ? 
            <input id="subject-input" type="text" placeholder="Make flashcards about.." name='q' onChange={(e) => {
                console.log(e.target.value);
                setLesson(e.target.value);
            }} /> : null}

            {view === 1 ?
            <input id="subject-input" type="text" placeholder="What specific topics would you like to include? (comma separated)" name='q' onChange={(e) => {
                console.log(e.target.value);
                setSpecifics(e.target.value);
            }} /> : null}

            {view === 2 ? 
                   <Dropdown 
                   title="test"
                   options={[{label:'Ten', value:10}, {label:'Twenty', value:20}]}
                   onSelect={(option) => setNumFlashcards(option.value)}
               /> : null
            }

            {view === 3 ?
                <Flashcards />            
            : null}

            <button onClick={() => {
                handleClick()
            }}>
                {view === 1 && specifics.length === 0 ? 'Skip' : 'Submit'}
            </button>

         
        </div>
    )
}
