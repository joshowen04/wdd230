const lastmod = document.querySelector('#lastmod');
const copywriteyear = document.querySelector('#copywriteyear');
const d = new Date();
const year = d.getFullYear();

copywriteyear.textContent += year
lastmod.textContent = `This was last modified: ${document.lastModified}`;
/*lastmod.innerHTML = */
