let helloworld = document.querySelector('button');
helloworld.addEventListener('click', showmsg);

function showmsg(){
    let inputt = prompt('Enter studen name: ');
    
    if(inputt == 'choose'){
        alert('Ani dea mzaaq e >(');
    }
    else{
        helloworld.textContent = 'JAVASCRIPT '+inputt;
    }
}