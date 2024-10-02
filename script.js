function showMember(title, description, imageSrc) {
    const image = document.getElementById('image');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    // Start fading out the current image
    image.classList.add('fade-out');

    // After 500ms (duration of the fade out), change the image source and text
    setTimeout(() => {
        image.src = imageSrc;
        titleElement.innerText = title;
        descriptionElement.innerText = description;

        // Start fading in the new image
        image.classList.remove('fade-out');
    }, 500); // Same as the transition duration in CSS
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuIcon = document.getElementById("menu-icon");
    
    // Toggle the menu visibility
    menu.classList.toggle("menu-open");
    
    // Change the hamburger icon to X
    const bars = menuIcon.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("change");
    }
}


const originalText = 'play.chorus.hu'; // Default button text
const copiedText = 'Ip cím kimásolva!'; // Text to show after copying

document.getElementById('copyButton').addEventListener('click', () => {
    const textToCopy = 'play.chorus.hu';

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Ip másolva: ', textToCopy);

            const button = document.getElementById('copyButton');
            button.textContent = copiedText;

            setTimeout(() => {
                button.textContent = originalText;
            }, 5000);

            alert('Ip cím kimásolva!');
        })
        .catch(err => {
            console.error('Hiba: ', err);
        });
});

const OriginalText = 'play.chorus.hu'; // Default button text
const CopiedText = 'Ip cím kimásolva!'; // Text to show after copying

document.getElementById('copyButton1').addEventListener('click', () => {
    const textToCopy = 'play.chorus.hu';

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Ip másolva: ', textToCopy);

            const button = document.getElementById('copyButton1');
            button.textContent = copiedText;

            setTimeout(() => {
                button.textContent = originalText;
            }, 5000);

            alert('Ip cím kimásolva!');
        })
        .catch(err => {
            console.error('Hiba: ', err);
        });
});
