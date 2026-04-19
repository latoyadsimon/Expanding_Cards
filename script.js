const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);

panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log(123);
    // to remove the class of active, we make a function that removes it from all the panels.
    removeActiveClasses();
    // add the class of active to the one we click
    panel.classList.add("active");
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
});
