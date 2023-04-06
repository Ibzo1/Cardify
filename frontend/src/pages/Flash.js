import React from 'react'
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import Searchbar from '../components/Searchbar';
import Flashcards from '../components/Flashcards';
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

export default function Flash() {
    const [lesson, setLesson] = React.useState('');
    const [specifics, setSpecifics] = React.useState('');
    const [view, setView] = React.useState(0);
    const [numFlashcards, setNumFlashcards] = React.useState(5);
    const [error, setError] = React.useState(null);
    const [flashcards, setFlashcards] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        if (view === 0) {
            if (lesson.length > 0) setView(1);
            else setError('Please enter a lesson');
        } else if (view === 1) {
            setView(2);
        } else if (view === 2) {
            handleSubmit();
            setView(3);
        } else if (view === 3) {
        }
    }

    const handleSubmit = () => {
        setLoading(true);
        // ask back 4 data
        axios.post('http://localhost:6969/get_flashcards', {
            lesson: lesson,
            specifics: specifics,
            number_of_flashcards: numFlashcards
        }).then(res => {
            console.log(res);
            setFlashcards(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
            setError('Something went wrong');
        })
    }

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            handleClick();
        }
    }

    return (
        <div>   
            {loading ?
            <div className='loader'>
              <div className='loadfix'>
                <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
              </div>
            </div></div>: null}
            

            {view === 0 ? 
                <div> 
                <h1>CARDIFY</h1>
                <>
                <div className='input1'>
                <Input className="search-bar" id="subject-input" type="text" placeholder="Make flashcards about.." name='q' onKeyDown={()=>keyPress()} onChange={(e) => {
                console.log(e.target.value);
                setLesson(e.target.value); 
                }}/>

                <div className='button1'>
                    <Button onClick={() => {handleClick()}}>
                    {'Submit'}
                    </Button>
                </div>   
                </div>
                </>
                </div>
            : null}
            
            
            {view === 1 ?
            <div>
                <h1>CARDIFY</h1>
                <div className='input1'>
                <Input id="specifics-input" type="text" placeholder="What specific topics would you like to include? (comma separated)" name='q' onKeyDown={()=>keyPress()} onChange={(e) => {
                console.log(e.target.value);
                setSpecifics(e.target.value);
                }} />
                
                <div className='button1'>
                    <Button onClick={() => {handleClick()}}>   
                
                {view === 1 && specifics.length === 0 ? 'Skip' : 'Submit'}
                </Button> </div>
                    
                </div>
            </div>
            : null}

                
            {view === 2 ? 
            <div>
                <h2> CHOOSE A NUMBER OF CARDS..</h2>
                <Dropdown 
                    className='dropdown'
                    title={numFlashcards}
                    options={[{label:'5', value:5}, {label:'10', value:10}, {label:'20', value:20}, {label:'30', value:30}]}
                    onSelect={(option) => setNumFlashcards(option.value)}
                    /> 
                <div className='button2'>
                    <Button onClick={() => {handleClick()}}>Submit</Button>
                </div>
                </div>
                : null}
                

            
            {flashcards ? <div class="box"> <div className='flashcards'>
                          <Flashcards cards={flashcards}
                                      justifyContent={'center'}
                                      alignItems={'center'}
                                      height={'100vh'}
                                      fontSize={'30px'}
                        
                          />
                          </div></div>
            : null}


         
            
        

        </div>
    )
}
