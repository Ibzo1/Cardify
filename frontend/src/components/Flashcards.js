import { FlashcardArray } from "react-quizlet-flashcard";

export default function Flashcards(props) {
  const cards = props.cards.map((c, i) => {
    return ({
      id: i,
      frontHTML: c.front,
      backHTML: c.back
    })
  })
  return (
    <div>
      <FlashcardArray cards={cards} />
    </div>
  );
}