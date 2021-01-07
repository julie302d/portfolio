//siden er loadet
window.addEventListener("load", sidenVises);

function sidenVises(){
    console.log("sidenVises");

    //Lytter efter klik på burgermenuen
    document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu(){
    console.log("toggleMenu");

    document.querySelector("#menupunkter").classList.toggle("on");

}
