      const musicItemsContainer = document.getElementById("music-items-container");

      fetch("music_data.json")
        .then((response) => response.json())
        .then((jsonData) => {
          for (const musicItem of jsonData.music_items) {
  
            const musicItemDiv = document.createElement("div");
            musicItemDiv.classList.add("musicitem");

            const musicLink = document.createElement("a");
            musicLink.classList.add("musiclinks");
            musicLink.onclick = playlistadd;

            const musicImage = document.createElement("img");
            musicImage.id = "art";
            musicImage.src = musicItem.image_src;

            const musicTitleDiv = document.createElement("div");
            musicTitleDiv.id = "musicitemtexttitle";

            const musicTitle = document.createElement("h4");
            musicTitle.textContent = musicItem.title;

            const musicArtistDiv = document.createElement("div");
            musicArtistDiv.id = "musicitemtext";

            const musicArtist = document.createElement("span");
            musicArtist.textContent = musicItem.artist;

            musicLink.appendChild(musicImage);
            musicTitleDiv.appendChild(musicTitle);
            musicArtistDiv.appendChild(musicArtist);
            musicLink.appendChild(musicTitleDiv);
            musicLink.appendChild(musicArtistDiv);
            musicItemDiv.appendChild(musicLink);
            musicItemsContainer.appendChild(musicItemDiv);
          }
        });


