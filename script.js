// Function to update the main image and description
function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  const descriptionDiv = document.getElementById("description");

  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  descriptionDiv.innerHTML = previewPic.alt;

  console.log("Mouse over or focus triggered.");
}

// Function to reset the main image and description
function undo() {
  const imageDiv = document.getElementById("image");
  const descriptionDiv = document.getElementById("description");

  imageDiv.style.backgroundImage = "url('')";
  descriptionDiv.innerHTML = "Description of the image will appear here.";

  console.log("Mouse out or blur triggered.");
}

// Function to handle blur (add a distinct visual effect)
function handleBlur(previewPic) {
  previewPic.style.filter = "grayscale(100%)"; // Convert image to grayscale
  console.log("Blur event occurred.");
}

// Function to handle focus (remove the blur effect)
function handleFocus(previewPic) {
  previewPic.style.filter = "none"; // Reset any filter effect
  console.log("Focus event occurred.");
}

// Function to initialize attributes and add listeners
function initialize() {
  const previewImages = document.querySelectorAll(".preview");

  previewImages.forEach((image, index) => {
    image.tabIndex = index + 1; // Set tabindex for keyboard navigation

    // Add event listeners for mouse and keyboard events
    image.addEventListener("mouseover", () => upDate(image));
    image.addEventListener("mouseleave", undo);
    image.addEventListener("focus", () => {
      upDate(image);
      handleFocus(image);
    });
    image.addEventListener("blur", () => {
      undo();
      handleBlur(image);
    });
  });

  console.log("Initialization complete.");
}

// Add the onload listener to call the initialize function
window.onload = initialize;