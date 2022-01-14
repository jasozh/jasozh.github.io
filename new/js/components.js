// Project component
var projects = [
    {
        Title: "JAdventure",
        Screenshot: "img/jadventure.png",
        Body: "JAdventure is a free, text adventure game with a prevalent fantasy theme. Players control their character through simple text commands, and players can earn points by killing monsters and surviving hostile encounters. The primary goal is to earn the maximum amount of points, and a secondary objective is to defeat a cruel beast and restore peace to the lands. JAdventure is open source and available for download on GitHub."
    },
    {
        Title: "JAdventure",
        Screenshot: "img/jadventure.png",
        Body: "JAdventure is a free, text adventure game with a prevalent fantasy theme. Players control their character through simple text commands, and players can earn points by killing monsters and surviving hostile encounters. The primary goal is to earn the maximum amount of points, and a secondary objective is to defeat a cruel beast and restore peace to the lands. JAdventure is open source and available for download on GitHub."
    }
]

function loadComponents() {
    projectComponent()
}

function projectComponent() {
    var projectPage = document.getElementById("projects").getElementsByClassName("content")[0]
    var template = document.getElementById("project-component")
    var component = template.content.querySelector("div")

    for (const project of projects) {
        var thisComponent = document.importNode(component, true)

        var mobileTitle = thisComponent.getElementsByTagName("h1")[0]
        var desktopTitle = thisComponent.getElementsByTagName("h1")[1]
        var screenshot = thisComponent.getElementsByTagName("img")[0]
        var body = thisComponent.getElementsByTagName("p")[0]

        // Set title, screenshot, and body
        mobileTitle.textContent = project.Title
        desktopTitle.textContent = project.Title
        screenshot.src = project.Screenshot
        body.textContent = project.Body

        projectPage.appendChild(thisComponent)
    }
}