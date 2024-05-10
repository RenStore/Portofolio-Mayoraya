
//variabel--------------------------------------------------------//

const aktif = document.querySelector(".c-img input");
const nama = document.querySelector('.img #nama');
const bg  = document.querySelector('.img #bg');
const pShandy  = document.querySelector('.img #p-shandy');
//---------------SD--------------------------//
const btn_sch_sd = document.querySelector('.SD');
const tulisan_sd= document.querySelector('#d-sd');
const judul_sd = document.querySelector('#c-judul-sd');
//---------------SMP-------------------------//
const btn_sch_smp = document.querySelector('.SMP');
const tulisan_smp = document.querySelector('#d-smp');
const judul_smp = document.querySelector('#c-judul-smp');
//--------------SMK---------------------------//
const btn_sch_smk = document.querySelector('.SMK');
const tulisan_smk = document.querySelector('#d-smk');
const judul_smk = document.querySelector('#c-judul-smk');
//---------------KULIAH------------------------//
const btn_sch_kuliah = document.querySelector('.KULIAH');
const tulisan_kuliah = document.querySelector('#d-kuliah');
const judul_kuliah = document.querySelector('#c-judul-kuliah');

//------------------------------------------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------//

//-------------------------Renstore-------------------------------//
const b_p_1 = document.querySelector('.b-projek1');
const j_renstore = document.querySelector('#renstore');
const d_renstore = document.querySelector('#d-renstore');

//-------------------------Shinka resto-------------------------------//
const b_p_2 = document.querySelector('.b-projek2');
const j_shinka = document.querySelector('#shinka');
const d_shinka = document.querySelector('#d-shinka');

//------------------------------Tugas---------------------------------//
const b_p_3 = document.querySelector('.b-projek3');
const j_tugas = document.querySelector('#tugas');
const d_tugas = document.querySelector('#d-tugas');

//foto-----------------------------------------------------------//

aktif.addEventListener('click',function(){
    nama.classList.toggle('muncul');
    bg.classList.toggle('blur');
    pShandy.classList.toggle('p-shandy');
});

//button pendidikan---------------------------------------//

//---------------------SD-----------------------------//
btn_sch_sd.addEventListener('mouseover', function(){
    tulisan_sd.classList.add('d-sd');
    judul_sd.classList.add('c-judul-sd');
});
btn_sch_sd.addEventListener('mouseout', function(){
    tulisan_sd.classList.remove('d-sd');
    judul_sd.classList.remove('c-judul-sd');
//--------------------SMP---------------------------//  
});
btn_sch_smp.addEventListener('mouseover', function(){
    tulisan_smp.classList.add('d-smp');
    judul_smp.classList.add('c-judul-smp');
});
btn_sch_smp.addEventListener('mouseout', function(){
    tulisan_smp.classList.remove('d-smp');
    judul_smp.classList.remove('c-judul-smp');
});
//--------------------SMK---------------------------//
btn_sch_smk.addEventListener('mouseover',function(){
    tulisan_smk.classList.add('d-smk');
    judul_smk.classList.add('c-judul-smk');
});
btn_sch_smk.addEventListener('mouseout',function(){
    tulisan_smk.classList.remove('d-smk');
    judul_smk.classList.remove('c-judul-smk');
});
//------------------KULIAH--------------------------//
btn_sch_kuliah.addEventListener('mouseover',function(){
    tulisan_kuliah.classList.add('d-kuliah');
    judul_kuliah.classList.add('c-judul-kuliah');
});
btn_sch_kuliah.addEventListener('mouseout',function(){
    tulisan_kuliah.classList.remove('d-kuliah');
    judul_kuliah.classList.remove('c-judul-kuliah');
});

//------------------------------------------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------//

//------------------------------renstore-------------------------------//

b_p_1.addEventListener('mouseover',function(){
    j_renstore.classList.add('renstore');
    d_renstore.classList.add('d-renstore');
})
b_p_1.addEventListener('mouseout',function(){
    j_renstore.classList.remove('renstore');
    d_renstore.classList.remove('d-renstore');
});
//------------------------------shinka resto-------------------------------//

b_p_2.addEventListener('mouseover',function(){
    j_shinka.classList.add('shinka');
    d_shinka.classList.add('d-shinka');
})
b_p_2.addEventListener('mouseout',function(){
    j_shinka.classList.remove('shinka');
    d_shinka.classList.remove('d-shinka');
});

//---------------------------------Tugas-----------------------------------//
b_p_3.addEventListener('mouseover',function(){
    j_tugas.classList.add('tugas');
    d_tugas.classList.add('d-tugas');
})
b_p_3.addEventListener('mouseout',function(){
    j_tugas.classList.remove('tugas');
    d_tugas.classList.remove('d-tugas');
});