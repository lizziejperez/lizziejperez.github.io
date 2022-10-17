// Footer Content Population
var contactHTML = '<div class="contact"><h3><a href="mailto:lizziejperez@gmail.com" class="h-link">lizziejperez@gmail.com</a></h3></div>';
var linksHTML = '<div class="links">';
var links = [
    ['https://www.linkedin.com/in/elizabeth-j-perez', 'LinkedIn'],
    ['https://github.com/lizziejperez/', 'GitHub'],
    ['https://lizziejperez.itch.io/', 'Itch.io'],
    // ['https://twitter.com/nirdypanda', 'Twitter'],
    // ['https://www.instagram.com/nirdypanda/', 'Instagram'],
    ['https://www.youtube.com/channel/UC3eF1VaU20H_IWCSBttt6Qg', 'YouTube'],
    ['https://soundcloud.com/user-280111311', 'SoundCloud']
];
for(let i = 0; i < links.length; i++) {
    linksHTML += '<a href="' + links[i][0] + '" target="_blank">' + links[i][1] + '</a>';
}
linksHTML += '</div>';
document.body.innerHTML += '<footer>' + linksHTML + contactHTML + '</footer>';