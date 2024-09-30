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
