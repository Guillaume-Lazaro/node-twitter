window.addEventListener('DOMContentLoaded', () => {
    bindTweet();    
});

// function bindTweet() {
//     const elements = document.querySelectorAll(".btn-danger");  //collections html 'danger'
//     const tweetContainer = document.querySelector("#tweet-list-container");     //récupére le container de la liste de twets

//     elements.forEach((e) => {
//         e.addEventListener("click", ($event) => {   //ajoute un element click sur chaque bouton
//             const tweetId = $event.target.getAttribute("tweetid");  //récupére l'id
//             axios
//             .delete("/tweets/" + tweetId)
//             .then(function (response) {
//                 tweetContainer.innerHTML = response.data;
//                 bindTweet();
//             })
//             .catch(function (err) {
//                 console.log(err);
//             });
//         });
//     });
// }

function bindTweet() {
    const tweetContainer = document.querySelector("#tweet-list-container");
    tweetContainer.addEventListener('click', (evt) => {     //ajoute un event sur tous les click du container
        console.log(evt.currentTarget);
        if(evt.target.classList.contains('btn-danger')) {   //Permet d'accéder à un élément html qui continet btn-danger
        const tweetId = evt.target.getAttribute("tweetid");  //récupére l'id
        axios
            .delete("/tweets/" + tweetId)
            .then(function (response) {
                tweetContainer.innerHTML = response.data;
                bindTweet();
            })
            .catch(function (err) {
                console.log(err);
            });
        }       
    })
}