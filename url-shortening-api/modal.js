
  // JavaScript function to toggle the modal visibility
  function toggleModal() {
   let modal = document.getElementById("nav-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  }
     // Add an event listener for the resize event
     window.addEventListener("resize", function () {
        let modal = document.getElementById("nav-modal");
        modal.style.display = "none"; // Close the modal on resize
      });
      window.addEventListener('scroll',function(){
        let modal = document.getElementById('nav-modal');
        modal.style.display='none';
      })
