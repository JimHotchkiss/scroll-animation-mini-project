// Grab all elements with class '.box'
const boxes = document.querySelectorAll('.box')

// Add an event-listener
window.addEventListener('scroll', checkBoxes)

// This checkBoxes() fires the function. This is why we see the first three elements. If we don't want that (usually we do), we can remove that function call, and the function won't fire until we scroll
checkBoxes()


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        console.log(triggerBottom, boxTop)

        if(boxTop < triggerBottom) {
            box.classList.add('show')

        } else {
            box.classList.remove('show')
        }
    })
}