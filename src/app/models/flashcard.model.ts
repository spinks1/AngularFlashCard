export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}