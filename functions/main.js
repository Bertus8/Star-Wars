const div$$ = document.querySelector(".container");

const createCharacter = async () => {
    for (let i = 1; i < 30; i++) {
    const speciesApi = await fetch(`https://swapi.dev/api/species/${i}/?format=json`);
    const speciesRes = await speciesApi.json();
        const characterDiv$$ = document.createElement("div");
        characterDiv$$.innerHTML = `
        <div class="character_contain">
        <ul class="character_items" >
        <li><h2>${speciesRes.name}</h2></li>
        <li><p><strong>Classification:</strong> ${speciesRes.classification}</p></li>
        <li><p><strong>Designation:</strong> ${speciesRes.designation}</p></li>
        <li><p><strong>Average:</strong> ${speciesRes.average_height}</p></li>
        <li><p><strong>Skin Colors:</strong> ${speciesRes.skin_colors}</p></li>
        <li><p><strong>Hair Colors:</strong> ${speciesRes.hair_colors}</p></li>
        <li><p><strong>Eye Colors:</strong> ${speciesRes.eye_colors}</p></li>
        <li><p><strong>Language:</strong> ${speciesRes.language}</p></li>
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
        if(speciesRes.name === `Trandoshan`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Trandoshan.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Mon Calamari`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/calamari.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }        
        if(speciesRes.name === `Ewok`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Ewok.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
          if(speciesRes.name === `Sullustan`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Sullustan.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Neimodian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/neimoidia.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Gungan`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Gungan.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Toydarian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Toydarian.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Dug`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/dug.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Twi'lek`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/twilek.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Aleena`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Aleena.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Vulptereen`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Vulptereen.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Xexto`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Xexto.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Toong`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Toong.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Cerean`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Cerean.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Nautolan`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Nautolan.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Zabrak`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Zabrak.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Tholothian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Tholothian.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Iktotchi`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Iktotchi.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Quermian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Quermian.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Kel Dor`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Kel_Dor.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Chagrian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Chagrian.jpg">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Geonosian`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Geonosian.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
        if(speciesRes.name === `Mirialan`){
            const imgDiv$$ = document.createElement("div");
            imgDiv$$.innerHTML = `
            <div class="character_img">
            <img src="./assets/Mirialan.png">
            </div>
            `
        div$$.appendChild(imgDiv$$);    
        }
    }
};

createCharacter();