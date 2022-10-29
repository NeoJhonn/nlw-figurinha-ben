let isExplorer = true
function changeCard(event){
    const card = event.currentTarget
    const type = isExplorer ? "explorer" : "ignite"
    isExplorer = !isExplorer
    card.style.backgroundImage = `url(./assets/card-${type}.svg)`
}