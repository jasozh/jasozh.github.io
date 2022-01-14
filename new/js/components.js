function loadComponents() {
    projectComponent()
}

// Project component
var projects = [
    {
        id: "jadventure",
        title: "JAdventure",
        screenshot: "img/jadventure.png",
        body: "JAdventure is a free, text adventure game with a prevalent fantasy theme. Players control their character through simple text commands, and players can earn points by killing monsters and surviving hostile encounters. The primary goal is to earn the maximum amount of points, and a secondary objective is to defeat a cruel beast and restore peace to the lands. JAdventure is open source and available for download on GitHub."
    },
    {
        id: "website",
        title: "JAdventure",
        screenshot: "img/vscode.png",
        body: "JAdventure is a free, text adventure game with a prevalent fantasy theme. Players control their character through simple text commands, and players can earn points by killing monsters and surviving hostile encounters. The primary goal is to earn the maximum amount of points, and a secondary objective is to defeat a cruel beast and restore peace to the lands. JAdventure is open source and available for download on GitHub."
    }
]

function projectComponent() {
    var projectPage = document.getElementById("projects").getElementsByClassName("content")[0]
    var template = document.getElementById("project-component")
    var component = template.content.querySelector("div")

    for (const project of projects) {
        var thisComponent = document.importNode(component, true)
        
        // Set variables
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT TITLE}", project.title)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT SCREENSHOT}", project.screenshot)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT ID}", project.id)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT BODY}", project.body)

        projectPage.appendChild(thisComponent)
    }
}