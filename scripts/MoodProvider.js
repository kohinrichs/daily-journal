let moods = []

export const getMoods = () => {
    return fetch('http://localhost:8088/mood') // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedMoods => {
            // What should happen when we finally have the array?
            console.log(parsedMoods)
            moods = parsedMoods
        })
}

export const useMoods = () => {
    return moods.slice()
}
