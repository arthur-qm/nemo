let postdivs = document.getElementsByClassName('post-resumo-texto');
let min = (x, y) => { return x < y ? x : y};
let charlim = 80;

for (let i = 0; i < postdivs.length; i++) {
    let curr_div = postdivs[i];
    let desc_p = curr_div.getElementsByTagName('p')[0];
    let flagmenor = desc_p.innerText.length > charlim ? true : false;
    desc_p.innerText = desc_p.innerText.slice(0, min(desc_p.innerText.length, charlim));
    if (flagmenor) {
        desc_p.innerText += ' ....'
    }
}