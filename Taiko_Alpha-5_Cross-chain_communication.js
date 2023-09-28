// #############################################################################
// ###### Taiko Alpha-5 Second Quiz script [Cross-chain communication exploration questions]: https://galxe.com/taiko/campaign/GCz4qUR7aB
// ###### Solves the quiz and claims 30 points.
// ###### made by https://t.me/vardhanam
// #############################################################################
// 1. Open the developers console (F12 for Windows, cmd+option+I for Mac)
// 2. Open the campaign link, sign in to Galxe with your wallet
// 3. Refresh the page
// 4. Put the script in the console and press enter
// 5. Wait until it's all done!
// P.S. It's important to open Galxe page after opening Developer's Console!!
// #############################################################################

// Call the function to check all twitter and "visit site" tasks

const elementsToClick = document.querySelectorAll('.d-flex.height-100.width-100.click-area');

const clickElement = (element) => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
};

elementsToClick.forEach(clickElement);

function clickFirstButtonWithText(text) {
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button.textContent.trim() === text) {
      button.click();
      console.log("Clicked the first button with text:", text);
      return;
    }
  }

  console.log("Button with text not found:", text);
}



// Function to select the quiz option
function selectQuizOption(option) {
  const quizItems = document.querySelectorAll(".quiz-choice-item");

  quizItems.forEach((item) => {
    const optionText = item.querySelector(".flex-grow-1").textContent.trim();

    if (optionText.startsWith(option + ".")) {
      item.click();
    }
  });

  console.log("Selected option:", option);
}

// Function to iterate over the quiz options and perform the actions
async function iterateQuizOptions(options) {
  console.log(options);
  for (let i = 0; i < options.length; i++) {

    const option = options[i];
    console.log(option)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay
    selectQuizOption(option);

    await new Promise((resolve) => setTimeout(resolve, 750)); // Delay
    clickFirstButtonWithText("Submit");
    clickFirstButtonWithText("Next");

    await new Promise((resolve) => setTimeout(resolve, 750)); // Delay
  }

}

// Quiz options
const quizOne = ["C", "B", "B", "D", "C"];

// Function to start quizzes sequentially
async function startQuizzes() {

clickFirstButtonWithText("Start");
await iterateQuizOptions(quizOne);

}

// Call the function to start the quizzes sequentially
await startQuizzes();

// Claim points

async function claimPoints () {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  clickFirstButtonWithText("Claim 30 Points");
}

await claimPoints ();