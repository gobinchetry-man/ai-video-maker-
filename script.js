function generateVideo() {

    const prompt = document.getElementById("prompt").value;
    const ratio = document.getElementById("ratio").value;
    const duration = document.getElementById("duration").value;

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    if (prompt.trim() === "") {
        alert("Please enter your video idea.");
        return;
    }

    loading.style.display = "block";
    result.innerHTML = "";

    setTimeout(() => {

        loading.style.display = "none";

        result.innerHTML = `

            <div class="scene">
                <h3>Scene 1</h3>
                <p>${prompt}</p>
            </div>

            <div class="scene">
                <h3>Scene 2</h3>
                <p>AI will generate the next scene here.</p>
            </div>

            <div class="scene">
                <h3>Scene 3</h3>
                <p>AI image and animation will be added here.</p>
            </div>

            <div class="scene">
                <h3>Settings</h3>
                <p>Aspect Ratio: ${ratio}</p>
                <p>Duration: ${duration} seconds</p>
            </div>

        `;

    }, 1500);
}
