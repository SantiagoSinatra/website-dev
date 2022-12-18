window.onload = () => {
    const headerText = document.getElementById("header-h1");
    const headerTextVariants = ['santi.', 'content creator.', 'developer.', 'dreamer.', 'driver.', 'enterpreneur.'];
    let currentText = 0;
    setInterval(changeText, 5000)
    

    function changeText() {
        let lastText = headerTextVariants.length -1;
        
        currentText == lastText ? currentText = 0 : currentText++;
        headerText.style.opacity = 0;

        setTimeout(()=> {
            headerText.innerText = headerTextVariants[currentText];
            headerText.style.opacity = 1;
        }, 1000)
    }
}