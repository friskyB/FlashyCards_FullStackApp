## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**HeaderContainer**
  - Header 

**HomeContainer**
 - Home

**CurrentLearnersContainer**
 - CurrentLearners
 - CurrentLearnerIndex

**SubjectDecksContainer**
 - SubjectDecks
 - SubjectDeckIndex
 - DeckForm

**SubscribedSubjectsContainer**
 - SubscribedSubjects
 - SubscribedSubjectIndex
 - SubjectForm

**NewCardsContainer**
 - NewCards
 - NewCardForm

 **SearchContainer**
 - Search
 - AutoSearchResults

 **BrowseCategoryContainer**
 - BrowseCategory
 - BrowseCategoryIndex

 **SearchResultsContainer**
 - SearchResults
 - SearchResultIndex

 **SubjectInfoContainer**
 - SubjectInfo

 **SubjectDeckInfoContainer**
 - SubjectDeckInfo
 - SubjectDeckInfoIndex

 **StudyScoreContainer**
 - StudyScore

 **StudyCardContainer**
 - StudyCard

 **Sidebar**

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "SessionFormContainer" |
| "/login" | "SessionFormContainer" |
| "/home" | "HomeContainer" |
| "/library" | "SubscribedSubjectsContainer", "CurrentLearnersContainer" |
| "/library/subject/:subjectId" | "SubjectDecksContainer" |
| "/library/newcards/:deckId" | "NewCardsContainer" |
| "/browse" | "SearchContainer", "BrowseCategoryContainer" |
| "/search" | "SearchContainer", "SearchResultsContainer" |
| "/subject/:subjectId" | "SubjectInfoContainer", "SubjectDeckInfoContainer", "CurrentLearnersContainer" |
| "/study/:deckId" | "StudyCardContainer", "StudyScoreContainer" |
