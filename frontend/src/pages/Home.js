import React from 'react'
import logo from '../assets/img/logo2.png'
import axios from 'axios'
import Accordion from '../components/Accordion'
import Flashcards from '../components/Flashcards'

export default function Home() {
    const [subject, setSubject] = React.useState(null);
    const [lessons, setLessons] = React.useState(null);
    const [outline, setOutline] = React.useState(null);

    const getCourseData = () => {
        console.log('getting course data for ' + subject)
        axios.post('http://localhost:6969/get_course', {
            subject: subject
        }).then((res) => {
            console.log(res);
            setLessons(res.data.lessons);
            setOutline(res.data.outline);
            console.log(lessons);
        }).catch(err => {
            console.log(err);
            console.log(err.response.data)
        })
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div class="learnAI"><h1><b><img src={logo} width="275" height="275" /></b></h1></div>
            <div class="container">
                <div class="search-bar">
                    <input id="subject-input" type="text" placeholder="Teach me about.." name='q' onChange={(e) => {
                        console.log(e.target.value)
                        setSubject(e.target.value);
                    }} />
                    <button onClick={() => getCourseData()} id="submit-btn"><img src="./search.png" alt="" /></button>
                </div>
            </div>
            <Flashcards/>
            <div class="lessons">
                <div>Lessons:</div>
            </div>
            <Accordion panels={
                lessons ? lessons.map((lesson, index) => {
                    return {
                        title: outline[index],
                        content: lesson
                    }
                }) : [] 
            } />
        </div>
    )
}
