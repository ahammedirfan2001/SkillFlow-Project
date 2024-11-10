function searchTutorials() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const tutorials = document.querySelectorAll(".tutorial-card");

    tutorials.forEach((tutorial) => {
        const tutorialText = tutorial.textContent.toLowerCase();
        if (tutorialText.includes(input)) {
            tutorial.style.display = "block";
        } else {
            tutorial.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("SkillFlow loaded successfully!");
});
