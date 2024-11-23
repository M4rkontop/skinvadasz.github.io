async function getHead() {
    const username = document.getElementById('username').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!username) {
        resultDiv.innerHTML = '<p class="error">Kérlek, adj meg egy felhasználónevet!</p>';
        return;
    }

    try {
        const response = await fetch(`https://playerdb.co/api/player/minecraft/${username}`);
        
        if (!response.ok) {
            resultDiv.innerHTML = '<p class="error">Ez a felhasználó nem létezik :,(</p>';
            return;
        }

        const data = await response.json();
        const uuid = data.data.player.id;
        const headUrl = `https://crafatar.com/skins/${uuid}?size=128&overlay`;

        resultDiv.innerHTML = `
            <img id="playerHead" src="${headUrl}" alt="${username} skinje">
            <p>${username} skinje</p>
            <button id="downloadBtn" class="download-btn">Letöltés</button>
        `;

        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.style.display = 'inline-block';
        downloadBtn.onclick = () => downloadImage(headUrl, `${username}s_skin.png`);
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = '<p class="error">Adatok lekérése sikertelen!</p>';
    }
}


function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            const urlBlob = URL.createObjectURL(blob);
            a.href = urlBlob;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(urlBlob);
        })
        .catch(error => console.error('Adatok lekérése sikertelen:', error));
}

const inputField = document.getElementById('username');
inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getHead();
    }
});
