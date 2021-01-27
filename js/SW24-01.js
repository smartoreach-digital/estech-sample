let logoData = [
{ url: './images/client1.jpg', name: 'logo1', altText: 'logo1'},
{ url: './images/client2.png', name: 'logo2', altText: 'logo2'},
{ url: './images/client3.png', name: 'logo3', altText: 'logo3'},
{ url: './images/client4.png', name: 'logo4', altText: 'logo4'},
{ url: './images/client5.png', name: 'logo5', altText: 'logo5'},
{ url: './images/client6.png', name: 'logo6', altText: 'logo6'},
{ url: './images/client7.png', name: 'logo7', altText: 'logo7'},
{ url: './images/client8.png', name: 'logo8', altText: 'logo8'}
];

let htmlstr = "";


logoData.map(item => {
    console.log(item)
htmlstr += `<div class='SW24-01-card'>
<div class='SW24-01-img-cover'>
<img class='SW24-01-img' src=${item.url} alt=${item.altText}>
</div>
</div> `
});

$('.SW24-01-cards-wrapper').html(htmlstr);
