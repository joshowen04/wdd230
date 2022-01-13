const lastmod = document.querySelector("#lastmod");
const copywriteyear = document.querySelector("#copywriteyear");
const d = new Date();
const year = d.getFullYear();

copywriteyear.textContent += `${year} | Joshua Owen | Santiago Chile`;
lastmod.textContent = `This was last modified: ${document.lastModified}`;
/*lastmod.innerHTML = */