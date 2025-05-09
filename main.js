// At top of main.js
import { gsap } from "gsap";

// Add this to initPortfolio()
gsap.from(".project-card", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.1
});

// DOM Elements
const codePortal = document.querySelector('.code-portal');
const writePortal = document.querySelector('.write-portal');
const codingSection = document.getElementById('coding');
const writingSection = document.getElementById('writing');
const projectGrid = document.querySelector('.project-grid');
const bookshelf = document.querySelector('.bookshelf');

// Sample Data
const projects = [
  {
    title: "Algorithm Visualizer",
    description: "Interactive DSA learning tool",
    tech: ["Python", "JavaScript"],
    link: "#"
  },
  {
    title: "Blog CMS",
    description: "Custom content management system",
    tech: ["JS", "HTML/CSS"],
    link: "#"
  }
];

const books = [
  {
    title: "Whispers of the Algorithm",
    excerpt: "In the year 2042, AI poets and human coders coexisted..."
  },
  {
    title: "The Binary Poet",
    excerpt: "Zeros and ones flowed like verses in the digital dawn..."
  }
];

// Initialize Portfolio
function initPortfolio() {
  renderProjects();
  renderBooks();
  setupNavigation();
}

// Render Projects
function renderProjects() {
  projectGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render Books
function renderBooks() {
  bookshelf.innerHTML = books.map((book, index) => `
    <div class="book" data-index="${index}">
      <h4>${book.title}</h4>
    </div>
  `).join('');
}

// Setup Navigation
function setupNavigation() {
  codePortal.addEventListener('click', () => {
    codingSection.classList.remove('hidden');
    writingSection.classList.add('hidden');
  });

  writePortal.addEventListener('click', () => {
    writingSection.classList.remove('hidden');
    codingSection.classList.add('hidden');
  });

  // Book click events
  document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
      const index = book.dataset.index;
      startTypewriter(books[index].excerpt);
    });
  });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initPortfolio);