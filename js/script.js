// ===============================
// GAANA AI VIBE CURATOR
// script.js
// ===============================

const input = document.getElementById("vc-input");
const button = document.getElementById("vc-go");
const results = document.getElementById("results");
const loading = document.getElementById("loading");

const chips = document.querySelectorAll(".vc-chip");

chips.forEach(chip => {
    chip.addEventListener("click", () => {
        input.value = chip.innerText;
        input.focus();
    });
});

button.addEventListener("click", curateVibe);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        curateVibe();
    }
});

async function curateVibe() {

    const prompt = input.value.trim();

    if (!prompt) {
        alert("Please describe your mood.");
        return;
    }

    results.innerHTML = "";
    loading.classList.remove("hidden");

    button.disabled = true;
    button.innerText = "Curating...";

    try {

        const response = await fetch("/api/curate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                prompt: prompt
            })

        });

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        renderPlaylist(data);

    } catch (error) {

        console.error(error);

        results.innerHTML = `

            <div class="song-card">

                <h3>Something went wrong.</h3>

                <p>Please try again later.</p>

            </div>

        `;

    } finally {

        loading.classList.add("hidden");

        button.disabled = false;

        button.innerText = "Curate My Vibe";

    }

}

function renderPlaylist(data) {

    results.innerHTML = "";

    if (!data.songs || data.songs.length === 0) {

        results.innerHTML = `

            <div class="song-card">

                <h3>No recommendations found.</h3>

            </div>

        `;

        return;

    }

    const heading = document.createElement("div");

    heading.innerHTML = `

        <h2 style="margin-bottom:25px;">

            🎵 ${data.vibe_summary}

        </h2>

    `;

    results.appendChild(heading);

    data.songs.forEach((song, index) => {

        const card = document.createElement("div");

        card.className = "song-card";

        card.innerHTML = `

            <div class="song-title">

                ${index + 1}. ${song.track}

            </div>

            <div class="song-artist">

                ${song.artist}

            </div>

            <div class="song-region">

                ${song.region}

            </div>

            <div class="song-description">

                ${song.vibe}

            </div>

        `;

        results.appendChild(card);

    });

}
