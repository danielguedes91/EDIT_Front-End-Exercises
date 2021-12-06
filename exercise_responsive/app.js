
function myFunction(buttonReference) {
    if (buttonReference !== undefined) {

      buttonReference.classList.toggle("change"); // Delete / add
      // 1. seleccionar o menu
      const sidebarRef = document.getElementsByClassName("sidebar")[0];
      // 2. adicionar uma classe "expanded" no scss -> animation
      // DONE!
      // 3. criar um toggle aqui para essa classe
      sidebarRef !== undefined && sidebarRef.classList.toggle("expanded");
  
      // Para resolver o problema do overflow do menu
      // 1. Scroll da janela para o 0
      const htmlRoot = document.querySelector('html');
      // htmlRoot.style.overflow = "visible";
  
      let condition = false;
      condition = buttonReference.classList.contains("change");
  
      // 2. Tirar o overflow
      if (condition) {
        // overflow === "hidden"
        htmlRoot.style.overflow = "hidden";
        window.scrollTo(0, 0); // x, y
        isOverflow = true;
      } else {
        // overflow === "visible"
        htmlRoot.style.overflow = "visible";
        isOverflow = false;
      }
    }
}
document.addEventListener("DOMContentLoaded", () => {
  myFunction();
})
