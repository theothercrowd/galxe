// #############################################################################
// ###### Twitter Checker script for Galxe
// ###### The script solves all twitter and "visit site" tasks
// ###### made by https://t.me/vardhanam
// #############################################################################
// 1. Open the developers console (F12 for Windows, cmd+option+I for Mac)
// 2. Open the campaign link, sign in to Galxe with your wallet
// 3. Refresh the page
// 4. Put the script in the console and press enter
// 5. There'll be twitter window opened during the script execution - close it
// 6. The page will automatically refresh - then you can see all twitter and visit site tasks cleared
// P.S. It's important to open Galxe page after opening Developer's Console!!
// P.P.S. Twitter must be already attached to your Galxe profile before executing the script
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

// Refresh the page in 15 seconds after beginning

async function pageRefresh () {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  location.reload()
}

await pageRefresh ();
