document.addEventListener("DOMContentLoaded", function () {


    let lists = document.querySelectorAll("li");
    /**
     * création d'un objet Map afin de parcourir les éléments de la commande de pizzas(clé,valeur)
     * @param {object<string, number>}
     */
    let myOrders = new Map();
    let payment = document.querySelector(".payment");


    /**
     * on boucle sur chaque élément de la liste de pizzas
     * pour ajouter à la map à l'écoute de clics sur bouton + et -
     * et afficher les nombres
     */
    lists.forEach(function (list, i) {
        myOrders.set(list.dataset.pizza, 0);


        // bouton PLUS

        list.querySelector(".btPlus").addEventListener("click", () => {
            list.querySelector(".quantity").innerHTML++;
            list.querySelector(".total_line").innerHTML = list.querySelector(".quantity").innerHTML * list.dataset.price;
            document.querySelector(".total2").innerHTML =
                Number(document.querySelector(".total2").innerHTML) +
                Number(list.dataset.price);

            if (Number(document.querySelector(".total2").innerHTML) > 0) {
                payment.classList.add("show");
            }
            // maj de la Map
            myOrders.set(list.dataset.pizza, list.querySelector(".quantity").innerText);

            console.log(list.querySelector(".quantity"))

            // maj de #amount
            document.querySelector("#amount").value = Number(document.querySelector(".total2").innerHTML);
            // maj de la commande
            document.querySelector("#description").value = affichercommande(myOrders);
        });

        //bouton MOINS
        list.querySelector(".btMoins").addEventListener("click", () => {
            if (list.querySelector(".quantity").innerHTML > 0) {
                list.querySelector(".quantity").innerHTML--;
                list.querySelector(".total_line").innerHTML =
                    list.querySelector(".quantity").innerHTML * list.dataset.price;
                document.querySelector(".total2").innerHTML =
                    Number(document.querySelector(".total2").innerHTML) -
                    Number(list.dataset.price);

                if (Number(document.querySelector(".total2").innerHTML) == 0) {
                    payment.classList.remove("show");
                }
                // maj de #amount
                document.querySelector("#amount").value = Number(document.querySelector(".total2").innerHTML);
                // maj de la Map
                myOrders.set(list.dataset.pizza, list.querySelector(".quantity").innerText);
                // maj de la commande
                document.querySelector("#description").value = affichercommande(myOrders);

            }
        });
    });

    /**
     * Fonction qui permet d'afficher la commande dans la description du bouton paypal
     * @param {Map} myOrders 
     * @returns {string}
     */
    function affichercommande(myOrders) {

        let votreCommande = "";
        myOrders.forEach(function callback(value, key) {
            console.log(key, value);
            votreCommande += key + " : " + value + "\n";
        });
        return votreCommande;
    }





})

























