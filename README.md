# FlashyCards

## Overview

[FlashyCards][flashycards] is a full-stack web application inspired by brainscape where users study subjects they subscribe to. Subjects contain decks of flash cards that have a question and answer.  Once the answer to a question is revealed, the user then rates how well they knew it.  The application tracks this information and presents it in progress bars throughout the application.

## Features

#### Subscribe or Create Subjects

![library-pic]

Upon signing in, users are directed to the library page where they are shown the subjects they are subscribed to.  If a user wants to create a subject that doesn't exist, they can do it right in the library page.  For each subject in the user's library, a list of other user's who are also subscribed to that subject is shown.

### Search Subjects

![search-page-pic]

```ruby
def show
  @subjects = ActiveRecord::Base.connection.exec_query(<<-SQL)
    SELECT
      subjects.id,
      subjects.name,
      max(CASE WHEN (subscriptions.user_id = #{current_user.id}) THEN 1 ELSE 0 END) AS subscribed,
      COUNT(DISTINCT decks.id) AS deck_count,
      COUNT(DISTINCT cards.id) AS card_count,
      COUNT(DISTINCT subscriptions.id) AS learner_count
    FROM
      subjects
    LEFT OUTER JOIN
      subscriptions ON subjects.id = subscriptions.subject_id
    LEFT OUTER JOIN
      decks ON subjects.id = decks.subject_id
    LEFT OUTER JOIN
      cards ON decks.id = cards.deck_id
    WHERE
      LOWER(subjects.name) LIKE LOWER('%#{params[:id]}%')
    GROUP BY
      subjects.id
  SQL
end
```

#### Create, Edit and Delete Cards

![edit_card_pic]

Users can manage all the cards in a deck simultaneously.  The edit deck page shows all cards as questions and answers.  Users can remove cards, edit existing ones and add new ones all in the same page.  Once they click "Save Deck", all changes are then persisted to the database and the deck is updated.  If the user chooses they don't want to make the changes they began working on, they can simply click "Reset" and all the changes and canceled and the list of cards is reverted to it's original state.

#### Study Cards

![study_pic]

The main feature of the app is the ability to study cards and keep track of the user progress.  As the user clicks through the flash cards and reveal answers, they are asked how well they knew the answer on a scale of 1-5.  The goal is to know each card in the deck at a score of 5.  Once that goal is reached, the mastery percentage is shown as 100%.  Subsequently, the number of cards for each score is also shown as a progress bar on the side.

#### login / Sign up

![login_pic]

Users can create accounts with a username and password.  This password is then handled in the database as a hashed valued using BCrypt.  This way, the users actual password is always protected and never saved in the database.  The user's session is then managed through cookies stored on their browser.

[flashycards]: http://www.flashycards.club/
[login_pic]: ./docs/screenshots/login_code_pic.png
[manage_decks_pic]: ./docs/screenshots/manage_decks_pic.png
[edit_card_pic]: ./docs/screenshots/edit_card_pic.png
[study_pic]: ./docs/screenshots/study_pic.png
[library-pic]: ./docs/screenshots/library-pic.png
[search-page-pic]: ./docs/screenshots/search-page-pic.png
