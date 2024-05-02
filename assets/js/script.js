fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/plombier-a-velo.json')
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);
        const main = document.querySelector("main")
        const header = document.createElement('h1') // creer une balise
        header.innerText = data.entreprise.nomCommercial // lie la balise à la donnée json
        console.log(data.entreprise.nomCommercial) // voir dans la console
        main.appendChild(header) // permmet de lire la donnée sur html

        const principal = document.createElement('div') // creer une div
        principal.classList.add('principal') // donne à la div une classe
        console.log(principal)// voir dans la console
        main.appendChild(principal) // permmet de lire la donnée sur html

        const mai = document.createElement('div') // creer une div
        mai.classList.add('mai') // donne à la div une classe
        console.log(mai)// voir dans la console
        principal.appendChild(mai) // permmet de lire la donnée sur html

        const title = document.createElement('h2') // creer une div
        title.innerText = data.entreprise.phraseAccroche // lie la balise à la donnée json
        console.log(data.entreprise.phraseAccroche)// voir dans la console
        mai.appendChild(title) // permmet de lire la donnée sur html
        
        // console.log(data.entreprise.avantagesClients); // afficher les avantages clients dans la console
        const av = document.createElement('ul')
        av.classList.add('av')
        mai.appendChild(av)
        // console.log(av);

        const array = data.entreprise.avantagesClients
        array.forEach(element => { // pour chaque element
            // console.log(element); // vérifie que les elements sont bien lues
            const liste = document.createElement('li') // créer une balise li
            liste.innerText = element // lie la liste li à chaque element // ! ne pas mettre li.innerText = data.entreprise.avantagesClients car va lister 3 fois le tableau
            av.appendChild(liste)
            // console.log(liste)
            ;});

        const button = document.createElement('button')
        button.textContent = data.entreprise.texteAppelAction
        console.log(data.entreprise.texteAppelAction)
        mai.appendChild(button)

        const imagejavascript = document.createElement("img");
        imagejavascript.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBMzF2YC06nNckWyN2XfwNur657peAZtR9Q&s";
        principal.appendChild(imagejavascript)


        const h2 = document.createElement('h2')
        console.log(h2)
        h2.innerText = "SERVICES"
        main.appendChild(h2)

        const section = document.createElement('section')
        console.log(section);
        main.appendChild(section)

        const services = data.entreprise.services

        services.forEach(element => {
            let card = document.createElement('div')
            card.classList.add("card")
            section.appendChild(card)
            console.log(card);
            
            let nom = document.createElement('p')
            nom.innerText=element.nom
            card.appendChild(nom)
        

           let description= document.createElement('p')
           description.innerText=element.description
           card.appendChild(description)
        });
        
        const tem = document.createElement('h2')
        console.log(tem)
        tem.innerText = "TEMOIGNAGES"
        main.appendChild(tem)

        const sec = document.createElement('section')
        console.log(sec);
        main.appendChild(sec)

        const temoignages = data.entreprise.temoignages
        console.log(temoignages);

        temoignages.forEach(element=> {
            let carte = document.createElement('div')
            carte.classList.add("temoignage")
            sec.appendChild(carte)
            console.log(carte);

            let prenom = document.createElement('p')
            prenom.innerText = element.prenom
            carte.appendChild(prenom)
        

           let intervention= document.createElement('p')
           intervention.innerText = element.typeIntervention
           carte.appendChild(intervention)

           let commentaire = document.createElement('p')
           commentaire.innerText = element.commentaire
           carte.appendChild(commentaire)
        
        });
    })
    .catch(error =>
        console.error('Erreur lors de la récupération des données :', error));

    