import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlashcardService } from './app/services/flashcard.service';
import { FlashcardComponent } from './app/components/flashcard/flashcard.component';
import { Flashcard } from './app/models/flashcard.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FlashcardComponent],
  template: `
    <div class="container-fluid min-vh-100 py-4">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8">
          
          <!-- Header -->
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-white mb-3">
              <i class="fas fa-code me-3"></i>C# & .NET Flashcards
            </h1>
            <p class="lead text-white-50">Master C# and .NET programming concepts</p>
          </div>

          <!-- Controls -->
          <div class="card mb-4" style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: none; border-radius: 15px;">
            <div class="card-body p-4">
              <div class="row g-3 align-items-center">
                
                <!-- Search -->
                <div class="col-md-4">
                  <input 
                    type="text" 
                    class="form-control search-box" 
                    placeholder="Search flashcards..."
                    [(ngModel)]="searchQuery"
                    (ngModelChange)="onSearch()">
                </div>
                
                <!-- Category Filter -->
                <div class="col-md-3">
                  <select 
                    class="form-select search-box" 
                    [(ngModel)]="selectedCategory"
                    (ngModelChange)="onCategoryChange()">
                    <option value="All">All Categories</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                
                <!-- Study Mode -->
                <div class="col-md-3">
                  <div class="form-check form-switch d-flex align-items-center">
                    <input 
                      class="form-check-input me-2" 
                      type="checkbox" 
                      id="studyMode"
                      [(ngModel)]="isStudyMode"
                      (ngModelChange)="toggleStudyMode()">
                    <label class="form-check-label fw-semibold" for="studyMode">
                      Study Mode
                    </label>
                  </div>
                </div>
                
                <!-- Stats -->
                <div class="col-md-2 text-end">
                  <span class="badge bg-primary fs-6 px-3 py-2">
                    {{ currentIndex + 1 }} / {{ filteredFlashcards.length }}
                  </span>
                </div>
                
              </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mb-4">
            <div class="progress" style="height: 8px; border-radius: 10px; background: rgba(255, 255, 255, 0.2);">
              <div 
                class="progress-bar bg-success" 
                role="progressbar" 
                [style.width.%]="getProgress()"
                style="border-radius: 10px;">
              </div>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <small class="text-white-50">Progress</small>
              <small class="text-white-50">{{ getProgress() | number:'1.0-0' }}% Complete</small>
            </div>
          </div>

          <!-- Flashcard Container -->
          <div class="row justify-content-center mb-4" *ngIf="filteredFlashcards.length > 0">
            <div class="col-12 col-md-10 col-lg-8">
              <app-flashcard 
                [flashcard]="getCurrentFlashcard()"
                [currentIndex]="currentIndex"
                [totalCards]="filteredFlashcards.length">
              </app-flashcard>
            </div>
          </div>

          <!-- No Results -->
          <div class="text-center text-white" *ngIf="filteredFlashcards.length === 0">
            <i class="fas fa-search mb-3" style="font-size: 3rem; opacity: 0.5;"></i>
            <h4>No flashcards found</h4>
            <p>Try adjusting your search or category filter</p>
          </div>

          <!-- Navigation -->
          <div class="row justify-content-center" *ngIf="filteredFlashcards.length > 0">
            <div class="col-12 col-md-8">
              <div class="d-flex justify-content-between align-items-center">
                
                <button 
                  class="btn btn-custom"
                  (click)="previousCard()"
                  [disabled]="currentIndex === 0">
                  <i class="fas fa-chevron-left me-2"></i>Previous
                </button>
                
                <div class="d-flex gap-2">
                  <button class="btn btn-custom" (click)="shuffleCards()" title="Shuffle Cards">
                    <i class="fas fa-shuffle"></i>
                  </button>
                  <button class="btn btn-custom" (click)="resetProgress()" title="Reset Progress">
                    <i class="fas fa-redo"></i>
                  </button>
                </div>
                
                <button 
                  class="btn btn-custom"
                  (click)="nextCard()"
                  [disabled]="currentIndex === filteredFlashcards.length - 1">
                  Next<i class="fas fa-chevron-right ms-2"></i>
                </button>
                
              </div>
            </div>
          </div>

          <!-- Categories Summary -->
          <div class="row mt-5" *ngIf="selectedCategory === 'All' && !searchQuery">
            <div class="col-12">
              <div class="card" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: none; border-radius: 15px;">
                <div class="card-body text-center">
                  <h5 class="text-white mb-4">Study Statistics</h5>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="text-white">
                        <i class="fas fa-seedling fs-4 text-success mb-2"></i>
                        <h6>Beginner</h6>
                        <span class="fs-5 fw-bold">{{ getCategoryCount('Beginner') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-white">
                        <i class="fas fa-rocket fs-4 text-warning mb-2"></i>
                        <h6>Intermediate</h6>
                        <span class="fs-5 fw-bold">{{ getCategoryCount('Intermediate') }}</span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-white">
                        <i class="fas fa-crown fs-4 text-danger mb-2"></i>
                        <h6>Advanced</h6>
                        <span class="fs-5 fw-bold">{{ getCategoryCount('Advanced') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  providers: [FlashcardService]
})
export class App implements OnInit {
  allFlashcards: Flashcard[] = [];
  filteredFlashcards: Flashcard[] = [];
  currentIndex = 0;
  selectedCategory = 'All';
  searchQuery = '';
  isStudyMode = false;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    this.allFlashcards = this.flashcardService.getFlashcards();
    this.filteredFlashcards = [...this.allFlashcards];
    this.loadProgress();
  }

  getCurrentFlashcard(): Flashcard {
    return this.filteredFlashcards[this.currentIndex] || this.filteredFlashcards[0];
  }

  nextCard() {
    if (this.currentIndex < this.filteredFlashcards.length - 1) {
      this.currentIndex++;
      this.saveProgress();
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveProgress();
    }
  }

  onCategoryChange() {
    this.filteredFlashcards = this.flashcardService.getFlashcardsByCategory(this.selectedCategory);
    this.applySearch();
    this.currentIndex = 0;
    this.saveProgress();
  }

  onSearch() {
    this.applySearch();
    this.currentIndex = 0;
    this.saveProgress();
  }

  private applySearch() {
    if (this.searchQuery.trim()) {
      this.filteredFlashcards = this.flashcardService.searchFlashcards(this.searchQuery)
        .filter(card => this.selectedCategory === 'All' || card.category === this.selectedCategory);
    } else {
      this.filteredFlashcards = this.flashcardService.getFlashcardsByCategory(this.selectedCategory);
    }
  }

  toggleStudyMode() {
    if (this.isStudyMode) {
      this.shuffleCards();
    } else {
      // Return to original order
      this.onCategoryChange();
    }
  }

  shuffleCards() {
    this.filteredFlashcards = [...this.filteredFlashcards].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.saveProgress();
  }

  getProgress(): number {
    if (this.filteredFlashcards.length === 0) return 0;
    return ((this.currentIndex + 1) / this.filteredFlashcards.length) * 100;
  }

  getCategoryCount(category: string): number {
    return this.allFlashcards.filter(card => card.category === category).length;
  }

  resetProgress() {
    this.currentIndex = 0;
    this.saveProgress();
  }

  private saveProgress() {
    localStorage.setItem('flashcard-progress', JSON.stringify({
      currentIndex: this.currentIndex,
      category: this.selectedCategory,
      searchQuery: this.searchQuery,
      isStudyMode: this.isStudyMode
    }));
  }

  private loadProgress() {
    const progress = localStorage.getItem('flashcard-progress');
    if (progress) {
      const data = JSON.parse(progress);
      this.currentIndex = data.currentIndex || 0;
      this.selectedCategory = data.category || 'All';
      this.searchQuery = data.searchQuery || '';
      this.isStudyMode = data.isStudyMode || false;
      
      this.onCategoryChange();
      this.onSearch();
    }
  }
}

bootstrapApplication(App, {
  providers: []
});