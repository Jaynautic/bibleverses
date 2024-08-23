async function getData(url) {
    // const url = "https://bible-api.com/john+3:16";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      document.getElementById("title").innerHTML = `${json.reference}`
      document.getElementById("verse").innerHTML = `${json.text}`

    } catch (error) {
      console.error(error.message);
    }
}

function displayVerse() {
    let book = document.getElementById("inputBook").value
    let chapter = document.getElementById("inputChapter").value
    let verse = document.getElementById("inputVerse").value

    let url = `https://bible-api.com/${book}+${chapter}:${verse}`
    console.log(url)
    getData(url);
}