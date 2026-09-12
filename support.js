document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'aphostac_comments';
  const OWNED_KEY = 'aphostac_owned_comments';
  const CHAR_LIMIT = 280;

  /* --- Seed Comments (shown once if nothing stored yet) --- */
  const seedComments = [
    { id: 'seed-1', name: 'Maria', text: 'Excited to see where Aposworld goes. The idea of one search hub for academic work is huge.', time: 'Early supporter', owned: false },
    { id: 'seed-2', name: 'JR', text: 'Following on X already — the ten aspects framework is genuinely well thought out.', time: 'Early supporter', owned: false }
  ];

  function loadComments() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedComments));
      return seedComments;
    } catch (err) {
      return seedComments;
    }
  }

  function saveComments(comments) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch (err) {
      // storage unavailable, fail silently
    }
  }

  function loadOwnedIds() {
    try {
      const raw = localStorage.getItem(OWNED_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  function saveOwnedIds(ids) {
    try {
      localStorage.setItem(OWNED_KEY, JSON.stringify(ids));
    } catch (err) {
      // storage unavailable, fail silently
    }
  }

  let comments = loadComments();
  let ownedIds = loadOwnedIds();

  /* --- Render --- */
  const listEl = document.getElementById('commentList');

  function render() {
    if (!listEl) return;
    listEl.innerHTML = '';

    if (comments.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'comment-empty';
      empty.textContent = 'No comments yet — be the first to say something.';
      listEl.appendChild(empty);
      return;
    }

    [...comments].reverse().forEach(c => {
      const item = document.createElement('div');
      item.className = 'comment-item';

      const canDelete = ownedIds.includes(c.id);

      item.innerHTML = `
        <div class="comment-item-head">
          <span class="comment-item-name">${escapeHtml(c.name)}</span>
          <span class="comment-item-time">${escapeHtml(c.time)}</span>
        </div>
        <p class="comment-item-text">${escapeHtml(c.text)}</p>
        ${canDelete ? '<button class="comment-item-delete" type="button">Delete</button>' : ''}
      `;

      if (canDelete) {
        item.querySelector('.comment-item-delete').addEventListener('click', () => {
          comments = comments.filter(x => x.id !== c.id);
          ownedIds = ownedIds.filter(id => id !== c.id);
          saveComments(comments);
          saveOwnedIds(ownedIds);
          render();
        });
      }

      listEl.appendChild(item);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  render();

  /* --- Character Counter --- */
  const textInput = document.getElementById('commentText');
  const charCount = document.getElementById('commentCharCount');

  if (textInput && charCount) {
    textInput.addEventListener('input', () => {
      const len = textInput.value.length;
      charCount.textContent = `${len} / ${CHAR_LIMIT}`;
      charCount.classList.toggle('limit-near', len >= CHAR_LIMIT - 40);
    });
  }

  /* --- Post Comment --- */
  const nameInput = document.getElementById('commentName');
  const submitBtn = document.getElementById('commentSubmitBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const text = textInput.value.trim();
      if (!text) {
        textInput.focus();
        return;
      }

      const name = nameInput.value.trim() || 'Anonymous';
      const id = `c-${Date.now()}`;

      const newComment = {
        id,
        name,
        text,
        time: 'Just now'
      };

      comments.push(newComment);
      ownedIds.push(id);
      saveComments(comments);
      saveOwnedIds(ownedIds);

      nameInput.value = '';
      textInput.value = '';
      charCount.textContent = `0 / ${CHAR_LIMIT}`;
      charCount.classList.remove('limit-near');

      render();
    });
  }

  /* --- Share Button --- */
  const shareBtn = document.getElementById('shareBtn');
  const shareNote = document.getElementById('shareNote');

  if (shareBtn && shareNote) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Aphostac',
        text: 'Check out Aphostac — a global academic workspace, courses, and research hub.',
        url: window.location.origin + '/index.html'
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // user cancelled share, do nothing
        }
        return;
      }

      try {
        await navigator.clipboard.writeText(shareData.url);
        shareNote.textContent = 'Link copied to clipboard!';
        shareNote.classList.add('show');
        setTimeout(() => shareNote.classList.remove('show'), 2500);
      } catch (err) {
        shareNote.textContent = 'Copy failed — try sharing the link manually.';
        shareNote.classList.add('show');
      }
    });
  }

});