// Data
var projects = [
    {
        id: "canari",
        title: "Canari",
        logo: "img/projects/canari-logo.png",
        screenshot: "img/projects/canari.png",
        body: "Track your classes and keep up with enrollment. A beautiful native Linux app written with Python 3, GTK4+, and libadwaita. Canari is available for download on <a href='https://github.com/jasozh/canari'>GitHub</a>."
    },
    {
        id: "website",
        title: "jasozh.github.io",
        logo: "img/projects/website-logo.png",
        screenshot: "img/projects/website.png",
        body: "A personal portfolio website designed from the ground up to be modern, performant, and responsive. Developed using HTML, CSS, JavaScript, and Bootstrap 5. The source code is available on <a href='https://github.com/jasozh/jasozh.github.io'>GitHub</a>."
    },
    {
        id: "jadventure",
        title: "JAdventure",
        logo: "img/projects/jadventure-logo.png",
        screenshot: "img/projects/jadventure.png",
        body: "In the harshest corner of the world lies the Blasted Land, a place where few men have crossed and even fewer have lingered long. Kill monsters, survive hostile encounters, and defeat a cruel beast to restore peace to the lands. JAdventure is available for download on <a href='https://github.com/jasozh/jadventure'>GitHub</a>."
    }
]

var hobbies = [
    {
        id: "composing",
        title: "Composing",
        screenshot: "img/hobbies/composing.png",
        body: "I started composing music during the fall of 2019. At that time, I had already been playing the violin and piano for several years, and I wanted to create music of my own. After downloading MuseScore, I began to transcribe a few of my improvisations, and I later added on to these improvisations to turn them into complete scores. I have written over a dozen compositions since then, and you can find a list of my work on my <a href='https://musescore.com/user/38882263'>MuseScore profile</a>."
    },
    {
        id: "writing",
        title: "Writing",
        screenshot: "img/hobbies/writing.png",
        body: "Although I no longer write very frequently, I still enjoy writing poems and short stories whenever I have a burst of inspiration. Some of my favorite book genres are fantasy, science fiction, and historical fiction, and my writing tends to fall into those categories as well. Although my writing still leaves much to be desired, I hope to eventually finish a few of my short stories."
    }
]

// Global load function
function loadComponents() {
    projectComponent()
    hobbyComponent()
}

// Project component
function projectComponent() {
    var projectPage = document.getElementById("projects").getElementsByClassName("content")[0]
    var template = document.getElementById("project-component")
    var component = template.content.querySelector("div")

    for (const project of projects) {
        var thisComponent = document.importNode(component, true)

        // Set variables
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT TITLE}", project.title)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT LOGO}", project.logo)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT SCREENSHOT}", project.screenshot)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT ID}", project.id)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{PROJECT BODY}", project.body)

        projectPage.appendChild(thisComponent)
    }
}

// Hobby component
function hobbyComponent() {
    var hobbyPage = document.getElementById("hobbies").getElementsByClassName("content")[0]
    var template = document.getElementById("hobby-component")
    var component = template.content.querySelector("div")

    for (const hobby of hobbies) {
        var thisComponent = document.importNode(component, true)

        // Set variables
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{HOBBY TITLE}", hobby.title)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{HOBBY SCREENSHOT}", hobby.screenshot)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{HOBBY ID}", hobby.id)
        thisComponent.innerHTML = thisComponent.innerHTML.replaceAll("{HOBBY BODY}", hobby.body)

        hobbyPage.appendChild(thisComponent)
    }
}