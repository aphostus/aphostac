document.addEventListener('DOMContentLoaded', () => {

  /* --- Card Deck --- */
  const aspects = [
    { label: '01', title: 'Global Academic Workspace' },
    { label: '02', title: 'Global Academic Courses' },
    { label: '03', title: 'Global Academic Social Network' },
    { label: '04', title: 'Global Academic Marketplace' },
    { label: '05', title: 'Global Innovation & Research Hub' },
    { label: '06', title: 'Global Academic Projects Center' },
    { label: '07', title: 'Global Educational Organization' },
    { label: '08', title: 'Global Data Repository' },
    { label: '09', title: 'Global Academic Classes' },
    { label: '10', title: 'Global Artificial Intelligence Support' }
  ];

  const cardLeft = document.getElementById('deckCardLeft');
  const cardCenter = document.getElementById('deckCardCenter');
  const cardRight = document.getElementById('deckCardRight');
  const deckLink = 'aspects.html'; // local page every card links to

  if (cardLeft && cardCenter && cardRight) {
    const cards = [cardLeft, cardCenter, cardRight];
    let centerIndex = 1;

    function paint() {
      const len = aspects.length;
      const positions = [
        (centerIndex - 1 + len) % len,
        centerIndex % len,
        (centerIndex + 1) % len
      ];
      cards.forEach((card, i) => {
        const data = aspects[positions[i]];
        card.querySelector('.deck-card-index').textContent = data.label;
        card.querySelector('.deck-card-title').textContent = data.title;
        card.href = deckLink;
      });
    }

    function step() {
      cards.forEach(card => card.classList.add('is-swapping'));
      setTimeout(() => {
        centerIndex = (centerIndex + 1) % aspects.length;
        paint();
        cards.forEach(card => card.classList.remove('is-swapping'));
      }, 220);
    }

    paint();
    setInterval(step, 1000);
  }

  /* --- Popup Sheets --- */
  const overlay = document.getElementById('popupOverlay');
  const overviewSheet = document.getElementById('overviewSheet');
  const requestSheet = document.getElementById('requestSheet');
  const viewBtn = document.querySelector('.Viewact-main');
  const reqBtn = document.querySelector('.Groupact-main');

  if (overlay && overviewSheet && requestSheet && viewBtn && reqBtn) {
    let activeSheet = null;

    function openSheet(sheet) {
      activeSheet = sheet;
      overlay.classList.add('active');
      sheet.classList.add('active');
      sheet.setAttribute('aria-hidden', 'false');
      document.body.classList.add('popup-open');
    }

    function closeSheet(sheet) {
      sheet.classList.remove('active');
      sheet.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('active');
      document.body.classList.remove('popup-open');
      if (activeSheet === sheet) activeSheet = null;
    }

    viewBtn.addEventListener('click', () => openSheet(overviewSheet));
    reqBtn.addEventListener('click', () => openSheet(requestSheet));

    overlay.addEventListener('click', () => {
      if (activeSheet) closeSheet(activeSheet);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeSheet) closeSheet(activeSheet);
    });

    /* Drag-down-to-close via the handle */
    function makeDraggable(sheet) {
      const handle = sheet.querySelector('.popup-handle');
      if (!handle) return;

      let startY = 0;
      let currentY = 0;
      let dragging = false;

      handle.addEventListener('pointerdown', (e) => {
        dragging = true;
        startY = e.clientY;
        sheet.style.transition = 'none';
        handle.setPointerCapture(e.pointerId);
      });

      handle.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        currentY = Math.max(0, e.clientY - startY);
        sheet.style.transform = `translateY(${currentY}px)`;
      });

      function endDrag() {
        if (!dragging) return;
        dragging = false;
        sheet.style.transition = '';
        if (currentY > 120) {
          closeSheet(sheet);
        }
        sheet.style.transform = '';
        currentY = 0;
      }

      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
    }

    makeDraggable(overviewSheet);
    makeDraggable(requestSheet);
  }

  /* --- Request Form (submits to Formspree) --- */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqrkva';

  const requestForm = document.getElementById('requestForm');
  const requestFormNote = document.getElementById('requestFormNote');

  if (requestForm && requestFormNote) {
    const submitBtn = requestForm.querySelector('.popup-submit');

    requestForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      requestFormNote.classList.remove('show');

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(requestForm)
        });

        if (res.ok) {
          requestFormNote.textContent = "Thanks! We'll notify you as soon as Aphostac launches.";
          requestFormNote.classList.add('show');
          requestForm.reset();
        } else {
          requestFormNote.textContent = 'Something went wrong. Please try again.';
          requestFormNote.classList.add('show');
        }
      } catch (err) {
        requestFormNote.textContent = 'Network error. Please check your connection and try again.';
        requestFormNote.classList.add('show');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request Early Access';
        }
      }
    });
  }

});