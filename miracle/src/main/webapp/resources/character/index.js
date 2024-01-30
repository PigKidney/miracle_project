const APIkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA0NTQ5ODMifQ.qRPR0IyaLVBKy-H359BRJfUzgkU7RfCqfGtKOqqMFfXi38AcbeJ7hrZAugESjB4k8b9urYyuhvokN_Z4tTtCAEp0h6r9MURnTFn4HvDn5cwmPmr5PIE33Pm_P5yOxpx_glbfCkxroDPnfrWuqLGEwFkQoQqvEggkfCdkoReyYyNgSGyMu22o6lRK-hRA_jGkz97ZxT5eY3wL4auh1MCQyPtbhAOlOJPqe8amMJA1neqy5be-pWE3XmWp4FcQhRB5O2-d0aOAD2XrAPKHYhK2b0imKOs5ksMiMUh4Bho475bEhkYJnPkYbF8CKTUZTcSJD_ccGbaxn9zUqg1q11Aokg';


document.addEventListener('DOMContentLoaded', () => {
    updateCharacterListOnLoad();
    updateCharacterImg();
    
    
});

const updateCharacterListOnLoad = () => {
    const xmlHttpRequest = new XMLHttpRequest();
    
    xmlHttpRequest.addEventListener('readystatechange', () => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            const responseData = JSON.parse(xmlHttpRequest.responseText);
            updateCharacterList(responseData);
            console.log(responseData);
        }
    });
    
    
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/characters/%EB%B3%B4%EB%9D%BC%EB%8B%A4%EC%9C%A1/siblings", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.send();
};

const updateCharacterList = (data) => {
    
    data.sort((a, b) => b.ItemMaxLevel - a.ItemMaxLevel);
    
    data.forEach((character, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        
        
        listItem.innerHTML = `
        <div id="characterListContainer">
        <p id="rank">${index + 1}</p>
        <a href="${character.characterUrl}">${character.CharacterName}</a>
        <p id="item-level">${character.ItemMaxLevel}</p>
        <p id="class-name">${character.CharacterClassName}</p>
        <p id="server-name">${character.ServerName}</p>
        <p id="guild-name">${character.CharacterClassName}</p>
        <p id="guild-name">${character.Engravings}</p>
        <p id="guild-name">${character.GuildName}</p>
        
        </div>
        `;
        
        characterList.appendChild(listItem);
    });
}
const updateCharacterImg = () => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.addEventListener('readystatechange', () => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            const responseData = JSON.parse(xmlHttpRequest.responseText);
            const characterImageURL = responseData.CharacterImage;

            const imageElement = document.querySelector('.image-container img');
            imageElement.src = characterImageURL;
            
            
            // imageElement.alt = responseData.CharacterName;  
            // imageElement.loading = 'lazy';
            // imageElement.width = 450; 
            // imageElement.height = 521;
            // imageElement.decoding = 'async'; 
            // imageElement.style.color = 'transparent';

            // console.log(responseData);
        }
    });
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/characters/%EB%B3%B4%EB%9D%BC%EB%8B%A4%EC%9C%A1/profiles", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.send();
};

// document.getElementById("serverSelect").addEventListener("change", function() {
    //         var selectedServer = this.value;
    //         if (selectedServer) {
        //             window.location.href = "https://kloa.gg/characters?server=" + encodeURIComponent(selectedServer);
        //         }
        //     });
        