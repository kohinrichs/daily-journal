import { MoodFilter } from "./MoodFilter.js"
import { useMoods, getMoods } from "./MoodProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__mood")

eventHub.addEventListener("change", event => {
    if (event.target.name === "moodFilter") {
        const customEvent = new CustomEvent("moodChosen", {
            detail: {
                moodThatWasChosen: event.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)

    }
})

export const FilterBar = () => {
    getMoods()
        .then(() => {
        let mood = useMoods()
        
        render(mood)
        })
    }


let render = (allMoods) => {
    contentTarget.innerHTML = `
            ${MoodFilter(allMoods)}
        `
}