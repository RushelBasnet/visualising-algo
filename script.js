const nums = [10, 9, 1, 8, 100, 5];

const initialArrayEl = document.querySelector(".initial-array");
const algoSolnEl = document.querySelector(".algo-soln");
const btn = document.querySelector(".btn-start");

initialArrayEl.innerHTML = `Initial Array: [ ${nums.join(", ")} ]`;

// Delay function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Bubble Sort with animation
const bubbleSort = async function (arr) {
    algoSolnEl.innerHTML = "";
    algoSolnEl.style.display = "block";

    for (let i = 0; i < arr.length - 1; i++) {
        algoSolnEl.insertAdjacentHTML(
            "beforeend",
            `<div class="pass">Pass ${i + 1}</div>`
        );

        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                displayStep(arr);
                await sleep(700); 
            }
        }
    }

    algoSolnEl.insertAdjacentHTML(
        "beforeend",
        `<div class="pass">✅ Sorted Array: [ ${arr.join(", ")} ]</div>`
    );
};

// Render array step
const displayStep = function (arr) {
    algoSolnEl.insertAdjacentHTML(
        "beforeend",
        `<div class="step">[ ${arr.join(", ")} ]</div>`
    );
};

btn.addEventListener("click", () => {
    bubbleSort([...nums]); // clone array
});
