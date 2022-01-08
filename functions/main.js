const div$$ = document.querySelector(".container");

const createCharacter = async () => {
    for (let i = 1; i < 30; i++) {
    const speciesApi = await fetch(`https://swapi.dev/api/species/${i}/?format=json`);
    const speciesRes = await speciesApi.json();
        const characterDiv$$ = document.createElement("div");
        characterDiv$$.innerHTML = `
        <div class="character_contain">
        <h2>${speciesRes.name}</h2>
        <ul>
        <li><p>Classification: ${speciesRes.classification}</p></li>
        <li><p>Designation: ${speciesRes.designation}</p></li>
        <li><p>Average: ${speciesRes.average_height}</p></li>
        <li><p>Skin Colors: ${speciesRes.skin_colors}</p></li>
        <li><p>Hair Colors: ${speciesRes.hair_colors}</p></li>
        <li><p>Eye Colors: ${speciesRes.eye_colors}</p></li>
        <li><p>Language: ${speciesRes.language}</p></li>
        </ul>
        </div>
        `
        div$$.appendChild(characterDiv$$);

        if(speciesRes.name === 'Human'){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/human.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }   
        if(speciesRes.name === 'Droid'){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/droid.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === 'Wookie'){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/wookie.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === 'Rodian'){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Rodian.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === 'Hutt'){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Hutt.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Yoda's species`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/yoda.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
    }
};

createCharacter();