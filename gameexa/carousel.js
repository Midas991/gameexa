const carousel = document.getElementById('carousel');
const cards = carousel.children;
const cardWidth = cards[0].offsetWidth + 32; // ширина + gap
let current = 0;

function moveNext() {
  carousel.style.transition = 'transform 0.6s cubic-bezier(.4,.2,.6,1)';
  carousel.style.transform = `translateX(-${cardWidth}px)`;
  setTimeout(() => {
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    highlightActiveCard();
  }, 600);
}

function highlightActiveCard() {
  const viewport = carousel.parentElement;
  const viewportRect = viewport.getBoundingClientRect();
  let minDiff = Infinity;
  let activeCard = null;
  Array.from(carousel.children).forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const diff = Math.abs(cardCenter - viewportCenter);
    card.classList.remove('active');
    // Эффект исчезновения по краям
    const fadeZone = viewportRect.width * 0.12;
    let opacity = 1;
    if (cardCenter < viewportRect.left + fadeZone) {
      opacity = (cardCenter - viewportRect.left) / fadeZone;
    } else if (cardCenter > viewportRect.right - fadeZone) {
      opacity = (viewportRect.right - cardCenter) / fadeZone;
    }
    card.style.opacity = Math.max(0, Math.min(1, opacity));
    if (diff < minDiff) {
      minDiff = diff;
      activeCard = card;
    }
  });
  if (activeCard) activeCard.classList.add('active');
}

setInterval(moveNext, 3500);
highlightActiveCard(); 