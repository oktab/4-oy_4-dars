let textAreas = document.querySelectorAll("textarea");
let playButtons = document.querySelectorAll("button");
let voiceSelects = document.querySelectorAll("select");

playButtons.forEach((playButton, index) => {
    playButton.addEventListener("click", async () => {
        console.log("ISHLADI");
        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'd13f22c8f4mshe7b2907987f4a0ep1c8917jsn8fc157d5606e',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'uz',
                to: 'ru',
                html: textAreas[index].value
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            textAreas[index + 1].value = result.trans; 
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    });
});
