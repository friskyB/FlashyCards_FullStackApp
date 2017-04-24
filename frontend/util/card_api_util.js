export const fetchCards = (deckId) => {
  return $.ajax({
    url: `/api/decks/${deckId}/cards`
  });
};

export const fetchCard = (card) => {
  return $.ajax({
    url: `/api/cards/${card.id}`
  });
};

export const createCard = (card) => {
  return $.ajax({
    method: 'POST',
    url: `/api/cards`,
    data: {card}
  });
};
//
// export const updateSubject = (subject) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/subjects/${subject.id}`,
//     data: {subject}
//   });
// };
//
export const deleteCard = (card) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/cards/${card.id}`
  });
};
