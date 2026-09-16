function generateVideo() {

    const prompt = document.getElementById("prompt").value.trim();
    const ratio = document.getElementById("ratio").value;
    const duration = document.getElementById("duration").value;
    const style = document.getElementById("style").value;

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    const button = document.querySelector(".generate");

    if (prompt === "") {
        alert("Please enter your video idea first.");
        return;
    }

    // Start loading
    button.disabled = true;
    button.innerHTML = "⏳ Creating...";

    loading.style.display = "block";
    result.innerHTML = "";

    let progress = 0;

    const progressText = loading.querySelector("p");

    const progressTimer = setInterval(() => {

        progress += 10;

        if (progress <= 100) {
            progressText.textContent =
                "Creating your video... " + progress + "%";
        }

        if (progress >= 100) {

            clearInterval(progressTimer);

            loading.style.display = "none";

            button.disabled = false;
            button.innerHTML = "✨ Generate Video";

            createResult();

        }

    }, 150);

    function createResult() {

        result.innerHTML = `

            <div class="scene">

                <h3>🎬 Video Ready for Generation</h3>

                <p>
                    Your idea has been converted into a video plan.
                </p>

            </div>

            <div class="scene">

                <h3>📝 Your Idea</h3>

                <p>${escapeHTML(prompt)}</p>

            </div>

            <div class="scene">

                <h3>⚙️ Video Settings</h3>

                <p><strong>Aspect Ratio:</strong> ${ratio}</p>

                <p><strong>Duration:</strong> ${duration} seconds</p>

                <p><strong>Style:</strong> ${style}</p>

            </div>

            <div class="scene">

                <h3>🎞️ Scene 1</h3>

                <p>
                    Opening scene based on your idea.
                </p>

            </div>

            <div class="scene">

                <h3>🎞️ Scene 2</h3>

                <p>
                    Main story scene with cinematic visuals.
                </p>

            </div>

            <div class="scene">

                <h3>🎞️ Scene 3</h3>

                <p>
                    Final scene with a strong ending.
                </p>

            </div>

            <div class="preview">

                <div class="preview-icon">▶</div>

                <h3>Video Preview</h3>

                <p>
                    Real AI video generation will be connected here.
                </p>

            </div>

        `;
    }
}


// Prevent HTML from being inserted into the page
function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
