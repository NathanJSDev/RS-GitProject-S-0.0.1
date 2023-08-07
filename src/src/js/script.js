const arrow01=document.getElementById('arrow01');
const drop01=document.getElementById('drop01');
var dvc01 = false;
function dropper01(icon,list){
    if(dvc01==false){
        icon.setAttribute('name','chevron-up-sharp');
        list.classList.remove('drop-list')
        list.classList.add('drop-list-s')
        dvc01=true;
    }else if(dvc01==true){
        icon.setAttribute('name','chevron-down-sharp');
        list.classList.add('drop-list')
        list.classList.remove('drop-list-s')
        dvc01=false;
    }
}


const arrow02=document.getElementById('arrow02');
const drop02=document.getElementById('drop02');
var dvc02 = false;
function dropper02(icon,list){
    if(dvc02==false){
        icon.setAttribute('name','chevron-up-sharp');
        list.classList.remove('drop-list')
        list.classList.add('drop-list-s')
        dvc02=true;
    }else if(dvc02==true){
        icon.setAttribute('name','chevron-down-sharp');
        list.classList.add('drop-list')
        list.classList.remove('drop-list-s')
        dvc02=false;
    }
}