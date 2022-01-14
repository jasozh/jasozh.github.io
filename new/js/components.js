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

        // Set title
        var mobileTitle = thisComponent.getElementsByTagName("h1")[0]
        var desktopTitle = thisComponent.getElementsByTagName("h1")[1]
        mobileTitle.textContent = desktopTitle.textContent = project.title
        
        // Set screenshot/modal
        var screenshot = thisComponent.getElementsByTagName("img")[0]
        var modal = thisComponent.getElementsByClassName("modal")[0]
        var modalScreenshot = thisComponent.getElementsByTagName("img")[1]
        screenshot.src = project.screenshot
        screenshot.setAttribute("data-bs-target", `#${project.id}`)
        modal.id = `${project.id}`
        modalScreenshot.src = project.screenshot
        
        // Set body
        var body = thisComponent.getElementsByTagName("p")[0]
        body.textContent = project.body

        projectPage.appendChild(thisComponent)
    }
}