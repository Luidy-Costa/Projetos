const nomeinput = document.getElementById('nomepersonagem');
const hpinput = document.getElementById('Maxhp');
const imginput = document.getElementById('imgurl');
const btninput = document.getElementById('btncriar');
const personagemdiv = document.getElementById('personagens');

btninput.addEventListener('click', ()=>{
    const nome =nomeinput.value.trim();
    const maxhp = parseInt(hpinput.value.trim());
    const imgurl = imginput.value;

    if(nome == "" || maxhp <=0 || isNaN(maxhp)){
        alert("Preencha a ficha corretamente");
        return;
    };

    const card = document.createElement("div");
    card.classList.add("personagem");

    const img = document.createElement("img");
    img.src = imgurl;

    const info = document.createElement("div");
    info.classList.add("info");

    const titulo = document.createElement("h3");
    titulo.innerText = nome;

    const hptexto = document.createElement("p");
    hptexto.innerText = `${maxhp} / ${maxhp}`;

    const barracontainer = document.createElement("div");
    barracontainer.classList.add("barra-vida");

    const barra = document.createElement("div");
    barra.classList.add("barra");
    barra.style.width = "100%";

    barracontainer.appendChild(barra);

    let atualhp = maxhp

    const controles = document.createElement("div");
    controles.classList.add("controles")

    const inputvalor = document.createElement("input");
    inputvalor.value = 1;
    inputvalor.type = "number";
    inputvalor.min= 1;
    inputvalor.style.width = "50px";
    inputvalor.style.textAlign = "center";

    const btnmais = document.createElement("button");
    btnmais.innerText = "+";
    btnmais.type="button";
    btnmais.classList.add("btnmais");
    btnmais.addEventListener('click', () => {
        let valor = parseInt(inputvalor.value);
        if(atualhp + valor > maxhp){
            atualhp = maxhp;
        }else{
            atualhp += valor
        };
        atualizarbarra();

    });

    const btnmenos = document.createElement("button");
    btnmenos.innerText = "-";
    btnmenos.type="button";
    btnmenos.classList.add("btnmenos");
    btnmenos.addEventListener('click', () =>{
        let valor = parseInt(inputvalor.value);
        if(atualhp - valor <= 0){
            atualhp = 0
        }else{
            atualhp -= valor
    };
        atualizarbarra();
    });

    const btnremove = document.createElement("button");
    btnremove.type="button";
    btnremove.innerText="X";
    btnremove.classList.add("remove");

    btnremove.addEventListener('click',() =>{
        personagemdiv.removeChild(card);

    })



    controles.appendChild(inputvalor);
    controles.appendChild(btnmenos);
    controles.appendChild(btnmais);

    info.appendChild(titulo);
    info.appendChild(hptexto);
    info.appendChild(barracontainer);
    info.appendChild(controles);
    

    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(btnremove);

    personagemdiv.appendChild(card);



    function atualizarbarra (){
        const porcentagem = (atualhp / maxhp) *100;
        barra.style.width = porcentagem + "%";
        barra.style.background = porcentagem > 50 ? "green" : porcentagem > 20 ? "orange" : "red";
        hptexto.innerText = `${atualhp} / ${maxhp}`
    }




});

