import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flashcard } from '../../models/flashcard.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard!: Flashcard;
  @Input() currentIndex: number = 0;
  @Input() totalCards: number = 0;
  
  isFlipped = false;
  isBookmarked = false;

  ngOnInit() {
    this.isBookmarked = this.getBookmarkStatus();
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
    this.saveBookmarkStatus();
  }

  private getBookmarkStatus(): boolean {
    const bookmarks = JSON.parse(localStorage.getItem('flashcard-bookmarks') || '[]');
    return bookmarks.includes(this.flashcard.id);
  }

  private saveBookmarkStatus() {
    let bookmarks = JSON.parse(localStorage.getItem('flashcard-bookmarks') || '[]');
    if (this.isBookmarked) {
      bookmarks.push(this.flashcard.id);
    } else {
      bookmarks = bookmarks.filter((id: number) => id !== this.flashcard.id);
    }
    localStorage.setItem('flashcard-bookmarks', JSON.stringify(bookmarks));
  }

  getCategoryClass(): string {
    return this.flashcard.category.toLowerCase();
  }

  formatAnswer(answer: string): string {
    // Handle code blocks and inline code
    return answer;
  }
}