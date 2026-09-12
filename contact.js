document.addEventListener('DOMContentLoaded', () => {

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqrkva';
  const CONTACT_PHONE = '+639245266251'; // tel-safe, no spaces
  const CHAR_LIMIT = 1000;

  const nameInput = document.getElementById('composerName');
  const emailInput = document.getElementById('composerEmail');
  const messageInput = document.getElementById('composerMessage');
  const charCount = document.getElementById('composerCharCount');
  const sendBtn = document.getElementById('composerSendBtn');
  const callBtn = document.getElementById('composerCallBtn');
  const note = document.getElementById('composerNote');

  if (!messageInput) return;

  /* --- Live Character Counter --- */
  messageInput.addEventListener('input', () => {
    const len = messageInput.value.length;
    charCount.textContent = `${len} / ${CHAR_LIMIT}`;
    charCount.classList.toggle('limit-near', len >= CHAR_LIMIT - 100);
  });

  /* --- Note Helper --- */
  function showNote(text, isError = false) {
    note.textContent = text;
    note.classList.add('show');
    note.style.color = isError ? '#d98c8c' : '';
    setTimeout(() => note.classList.remove('show'), 4000);
  }

  /* --- Send via Formspree (default action) --- */
  sendBtn.addEventListener('click', async () => {
    const message = messageInput.value.trim();

    if (!message) {
      showNote('Write a message before sending.', true);
      messageInput.focus();
      return;
    }

    const name = nameInput.value.trim() || 'Someone from the website';
    const replyTo = emailInput.value.trim();

    const data = new FormData();
    data.append('name', name);
    data.append('email', replyTo);
    data.append('message', message);

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (res.ok) {
        messageInput.value = '';
        charCount.textContent = `0 / ${CHAR_LIMIT}`;
        charCount.classList.remove('limit-near');
        showNote('Message sent! We got it and will get back to you soon.');
      } else {
        showNote('Something went wrong. Please try again.', true);
      }
    } catch (err) {
      showNote('Network error. Please check your connection and try again.', true);
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Email';
    }
  });

  /* --- Call Action --- */
  callBtn.addEventListener('click', () => {
    window.location.href = `tel:${CONTACT_PHONE}`;
  });

});