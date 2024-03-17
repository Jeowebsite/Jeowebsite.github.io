/* 
    This file is used for user configuration/overrides.
    As of now, it's only used for the romLocation variable.
*/


let currentPageUrl = window.location.pathname;
let pathArray = currentPageUrl.split('/');
let relativePath = '';
for (let i = 1; i < pathArray.length - 2; i++) {
  relativePath += '../';
}
let n64Location = relativePath + '../n64-host/';
relativePath += '../gba-host/';

let ndsLocation = 'https://rawcdn.githack.com/mathadventure1/nds-host/d4fab0b759e31d196f364333ecc0ab8842cc1203/'

localStorage.setItem('romLocation', relativePath);
localStorage.setItem('ndsLocation', ndsLocation);
localStorage.setItem('n64Location', n64Location);