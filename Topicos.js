function makeTopicos(lista) {
    // Create a UL element
    var ul = document.createElement("ul");

    // Loop through the list of objects
    lista.forEach(function(objeto) 
	{
        // Create a new LI element for each object
        var li = document.createElement("li");

        // Create an H1 element for the "topico" property
        var h1 = document.createElement("h2");
        h1.textContent = objeto.topico;

        // Append the H1 element to the LI element
        li.appendChild(h1);

        // Create an OL element for the list of "itens"
        var ol = document.createElement("ol");

        // Loop through the list of "itens" and create anchor elements
        objeto.itens.forEach(function(item) 
		{
            var liItem = document.createElement("li");
            var anchor = document.createElement("a");
            anchor.textContent = item.link;
            anchor.href = item.href;
            anchor.target = "_blank"; // Open link in new tab
            
			// Append the anchor element to the LI element
            liItem.appendChild(anchor);
            
			// Append the LI element to the OL element
            ol.appendChild(liItem);
        });

        // Append the OL element to the LI element
        li.appendChild(ol);

        // Append the LI element to the UL element
        ul.appendChild(li);
    });

    // Append the UL element to the document body (or any other container)
    document.getElementById("Topicos").appendChild(ul);
}

// Example usage:
var listaDeObjetos = 
[
    { topico: "Aula de hoje", itens: [{ link: "primeiro", href: "https://www.primeiro.com" }, { link: "segundo", href: "https://www.segundo.com" }] },
    { topico: "Aula de amanhã", itens: [{ link: "terceiro", href: "https://www.terceiro.com" }, { link: "quarto", href: "https://www.quarto.com" }] }
];

makeTopicos(listaDeObjetos);

