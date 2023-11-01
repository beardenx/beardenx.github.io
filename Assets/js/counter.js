const counterElement = document.getElementById('visitor-counter');

async function updateVisitorCount() {
  try {
    const response = await fetch('https://api.countapi.xyz/update/your-website-name/your-counter-name/?amount=1');
    const data = await response.json();
    if (data && data.value !== undefined) {
      counterElement.textContent = `Visitors: ${data.value}`;
    }
  } catch (error) {
    console.error('Error updating visitor count:', error);
  }
}

updateVisitorCount();
