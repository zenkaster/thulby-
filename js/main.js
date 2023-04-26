const selector = document.querySelector('#lang')

const setLang =async(lang) =>{
    const langElems = document.querySelectorAll('[data-lang]')
    const ftch = await fetch("../lang.json")
    const langs = await ftch.json();
    console.log(langs);
    langElems.forEach(elem => {
        console.log(elem);
        if(elem.closest('input')){
            elem.placeholder = langs[elem.dataset.lang][lang];
            return
        }
        console.log(langs[elem.dataset.lang][lang]);
        elem.innerHTML = langs[elem.dataset.lang][lang]
    });
} 

selector.addEventListener('input',(e)=>{
    setLang(selector.value)
})