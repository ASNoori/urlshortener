document
  .getElementById("shorten-container")
  .addEventListener("submit",async function (event) {
    event.preventDefault();
    let urlVal = document.getElementById("url");
    let errmsg = document.getElementById("error-message");
    errmsg.textContent = urlVal.value.trim() === "" ? "Enter valid url" : "";
    urlVal.style.border =urlVal.value.trim() === "" ? "2px solid hsl(0, 87%, 67%)" : "";
    console.log(typeof urlVal.value)
    let shortenedurl = document.getElementById('shortened-url');
    if(urlVal.value.trim() !== '') {
        let urlstr = urlVal.value.trim().startsWith('https://www') ? urlVal.value.trim().substring(12, 17) : (urlVal.value.trim().startsWith('http://www') ? urlVal.value.trim().substring(11, 16) : urlVal.value.trim().substring(0, 5));
        shortUrl = 'short.ly/' + urlstr;
        document.getElementById('urltext').textContent=shortUrl;
        shortenedurl.style.display = 'flex';
        shortenedurl.style.justifyContent='space-between';
        document.getElementById('content-para').style.padding = '16rem 2rem 2rem 2rem';
        document.getElementById("copy-btn").style.display = 'block';
    } else {
        shortenedurl.style.display = 'none';
        document.getElementById("copy-btn").style.display = 'none';
    }
   
  });
  document.getElementById("copy-btn").addEventListener("click", function () {
    let urlToCopy = document.getElementById('urltext').textContent;

    navigator.clipboard.writeText(urlToCopy)
        .then(() => document.getElementById("copy-btn").textContent = "Copied")
        .catch(error => console.error('Unable to copy to clipboard', error));
});
    