function getDiscount(){

let origBudget= discount.getElement(what)
let disValue=Number(.2*origBudget);

document.getElementById("discbox").innerHTML

}

function getDiscount(){
    let budg = document.getElementById("cost").value;
    let disva = Number(budg * 0.2);

    document.getElementById("disdisbut").innerHTML = `
        <div class="container bg-secondary">
            <h2 class="text-white">Recommended Brands:</h2>
            <button class="btn btn-success"> Acer </button>
            <button class="btn btn-success"> Asus </button>
            <button class="btn btn-success"> Dell </button>
            <button class="btn btn-success"> Lenovo </button>
            <button class="btn btn-success"> MSI  </button>
            <p>Eligible Discount:<span class="bg-danger">${disva}</span></p>
        </div>
    `
}

function getLoction(){
    document.getElementById("Storeloc").innerHTML = `
        <div class="container bg-secondary">
                    <img src="PC Express LOGO.webp" width="200px">
                    <hr>
                    <p>
                        Quezon City: ROG Concept Store SM North<br>
                        Mandaluyong City: PC Express - SM Megamall<br>
                        Caloocan City: SM Caloocan located at CZ-13 3F SM<br>
                        Manila City: SM San Lazaro! located at 3/F CYBERZONE SM SAN LAZARO, FELIX HUERTAS STREET CORNER LACSON AVENUE (C-2 ROAD), SANTA CRUZ<br>
                    </p>
        </div>
    `
}