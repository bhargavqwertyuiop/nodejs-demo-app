const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greetMsg = document.getElementById('greetMsg');

greetBtn.addEventListener('click', async () => {
  const name = nameInput.value.trim();
  const url = name ? `/greet/${encodeURIComponent(name)}` : '/greet';
  try {
    const res = await fetch(url);
    const data = await res.json();
    greetMsg.textContent = data.message;
  } catch (err) {
    greetMsg.textContent = 'Error fetching greeting.';
  }
});
