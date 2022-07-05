/* Adds the Header and Menu to the page Body
   currPG - the current page as an Integer (0-3: 0=Home, 1=Resume, 2=Portfolio, 3=Play My Code)
*/
function addHeader(currPG) {
    var links = [
        ['index.html', 'Home'],
        ['resume.html', 'Resume'],
        ['portfolio.html', 'Portfolio'],
        ['play-my-code.html', 'Play My Code'],
        ['mailto:lizziejperez@gmail.com', 'Email Me']
    ];
    var headerHTML = '<header><h1><a href="';
    var menuHTML = '<menu>';

    if(currPG === 0) { // If the current page is the HOME Page (0)
        headerHTML += links[0][0] + '" class="h-link">Lizzie J. Perez</a></h1></header>';
        menuHTML += '<a href="' + links[0][0] + '" class="currPG">' + links[0][1] + '</a>';
        for(let i = 1; i < links.length; i++) {
            if(i === (links.length-1)) {
                menuHTML += '<a href="' + links[i][0] + '">' + links[i][1] + '</a>';
            } else {
                menuHTML += '<a href="pages/' + links[i][0] + '">' + links[i][1] + '</a>';
            }
        }
    } else {
        headerHTML += '../' + links[0][0] + '" class="h-link">Lizzie J. Perez</a></h1></header>';
        menuHTML += '<a href="../' + links[0][0] + '">' + links[0][1] + '</a>';
        for(let i = 1; i < links.length; i++) {
            if(currPG === i) {
                menuHTML += '<a href="' + links[i][0] + '" class="currPG">' + links[i][1] + '</a>';
            } else {
                menuHTML += '<a href="' + links[i][0] + '">' + links[i][1] + '</a>';
            }
        }
    }
    menuHTML += '</menu>';

    document.body.innerHTML = headerHTML + menuHTML + document.body.innerHTML; // Add Header and Menu HMTL to top of Body inner HTML
}