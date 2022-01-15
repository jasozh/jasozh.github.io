function loadComponents() {
    projectComponent()
    hobbyComponent()
}

// Project component
var projects = [
    {
        id: "website",
        title: "jasozh.github.io",
        screenshot: "img/projects/website.png",
        body: "jasozh.github.io was developed using HTML, CSS, and JavaScript. The website makes use of the Bootstrap 5 framework and was designed from the ground up to be modern, performant, and responsive. The website logo and background were designed using GIMP, and Visual Studio Code was used to code the website itself. The source code for jasozh.github.io is available on GitHub."
    },
    {
        id: "jadventure",
        title: "JAdventure",
        screenshot: "img/projects/jadventure.png",
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

// Hobby component
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
        body: "Although I no longer write very frequently, I still enjoy writing poems and short stories whenever I have a burst of inspiration. Some of my favorite book genres are fantasy, science fiction, and historical fiction, and my writing tends to fall into those categories as well. Although my writing still leaves much to be desired, you can find a list of my stories on my <a href='https://www.wattpad.com/user/jasozh'>Wattpad profile</a>."
    }
]

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