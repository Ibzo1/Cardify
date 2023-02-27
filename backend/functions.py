import openai
import re

def numbered_list_splitter(text):
    s = text
    l = re.findall(r'(?:^|\n)(([0-9]+)\.[\s\S]*?)(?=\n[0-9]+\.|\Z)', s)
    curr_num = 0                  # Init the current number to 0
    result = []                   # The final bullet point list
    for s,num in l:               # Iterate over the list of results
        if curr_num > int(num):   # If curr_num is greater than the number found
            if not result:        # If it is the first item, 
                result = ['']     #    we need to add an empty item
            result[-1] += s       # Append the text to the last item
        else:                     # else
            result.append(s)      # Append the line to the resulting list
        curr_num = int(num)       # Assign the current number
    return result
    

def flashcard_splitter(text):
    cards = text.split("Front:")
    for i in range(len(cards)):
        cards[i] = {"front": cards[i].split("Back:")[0], "back": cards[i].split("Back:")[1]}
    return cards

def get_flashcards(lesson, specifics, number_of_flashcards=5):
    engine = 'text-ada-001'
    # engine = 'text-davinci-003'
    prompt = (f"Create strong flashcards for preparing a student for an exam in this lesson: {lesson}. Inlcude material regarding {specifics}:\n Front:")
    flashcards = openai.Completion.create(
        engine=engine,
        prompt=prompt,
        max_tokens=200,
        n=1,
        stop=None,
        temperature=0,
    )
    cards = flashcard_splitter(flashcards.choices[0].text)
    print(flashcards.choices[0].text)
    return cards

    


def lesson(text):
    L = []
    for i in text:
        s += i + " "
        if i.type() == "Nat":
            L += s
            s = ''

def get_lessons(subject, number_of_lessons=5):
    # subject = input("Enter a Subject: ")
    # number_of_lessons = int(input("Enter the number of lessons: "))
    # engine = 'text-davinci-003'
    engine = 'text-ada-001'
    # maxtokens = 1024
    # engine = 'text-ada-001'


    # Generate a course outline
    prompt = (f"generate a simple numbered course outline for {subject} with {number_of_lessons} lesson(s): 1.")
    course_outline = openai.Completion.create(
        engine=engine,
        prompt=prompt,
        max_tokens=200,
        n=1,
        stop=f'{number_of_lessons+1}.',
        temperature=0,
    )

    print("Course Outline:")
    print(course_outline.choices[0].text)
    
    outline = numbered_list_splitter('1.' + course_outline.choices[0].text)
    print(outline)
        

    # Generate a lesson script
    #cout = open("x.txt", 'w')

    lessons = []
    for i in range(number_of_lessons):
        print("reached for loop")
        prompt = (f"""generate a lengthy university-like detailed script for the following lesson: "{outline[i]}" covering the key concepts and paragraph formatted flowing lectures and examples. Make sure the lecture has enough content to really teach students.""")
        
        lesson_script = openai.Completion.create(
            engine=engine,
            prompt=prompt,
            # max_tokens=4000,
            max_tokens=300,
            n=1,
            stop=None,
            temperature=0.9,
        )
        testprompt = (f"generate a 5 question multiple choice quiz for this lesson: ({lesson_script.choices[0].text}) of {subject} with the answers at the end. Don't forget to include the answers to the questions you gave at the end.")
        test = openai.Completion.create(
            engine=engine,
            prompt=testprompt,
            max_tokens=800,
            n=1,
            stop=None,
            temperature=0.9,
        )

        print(lesson_script.choices[0].text)
        lessons.append(lesson_script.choices[0].text)
        
        # cout.write(f"Lesson {i} Script:")
        # cout.write(lesson_script.choices[0].text)
        # cout.write(test.choices[0].text)
    
    return {"outline": outline, "lessons": lessons}
    # cout.close()
        #print(f"Lesson {i} Script:")
        #print(lesson_script.choices[0].text)
        #print(test.choices[0].text)