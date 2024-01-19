import config from './config.js';
document
  .getElementById("shorten-container")
  .addEventListener("submit",async function (event) {
    event.preventDefault();
    let urlVal = document.getElementById("url");
    let errmsg = document.getElementById("error-message");
    errmsg.textContent = urlVal.value.trim() === "" ? "Enter valid url" : "";
    urlVal.style.border =
      urlVal.value.trim() === "" ? "2px solid hsl(0, 87%, 67%)" : "";
      try {
        const accessToken = config.accessToken;
        console.log(accessToken);
        const groupGuid = config.groupGuid; 
        const response = await shortenUrl(urlVal.value, accessToken, groupGuid);
    
        // Assuming the API response contains a shortened URL
        const shortenedUrl = response.id;
    
        // Display the shortened URL
        console.log("Shortened URL:", shortenedUrl);
      } catch (error) {
        console.error("Error shortening URL:", error);
        errmsg.textContent = "Failed to shorten URL";
      }
    });
    
    async function shortenUrl(longUrl, accessToken, groupGuid) {
      const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
      console.log(accessToken);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          group_guid: groupGuid,
          domain: 'bit.ly',
          long_url: longUrl,
        }),
      });
    console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to shorten URL: ${response.statusText}`);
      }
    
      return response.json();
    }

