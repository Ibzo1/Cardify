# Cardify

This is a project I created to help students study for tests and exams by creating AI generated flashcards given a small subject or topic input.

## Frontend
For the frontend I used React to create an adaptable interface splitting tabs into different pages to create multiple displays when necessary and providing ease in implementing the rest of the algorithm. I used the NPMReact Suite to find and mutate various UI displays and animations for a clean interface. 


## Backend
The backend is built off of Flask, where I developed algorithms that work together to recursively prompt ChatGPT using input delivered from the frontend. This is done using the GPT3.5 API with low temperature to allow the strict prompting and templating to work every single time.


## Requests
All requests are done over Axios, which communicates between the front end back end and sends parsed text to the backend where it is formatted and outputted into cards on the frontend.


 
![cardify1](https://github.com/Ibzo1/Cardify/assets/110640043/e43c940d-1e98-4baa-a2e7-4ca39d2b36a0)
