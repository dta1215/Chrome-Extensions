
// $(document).ready(function(){

//     let btnState = localStorage.getItem('btnState');
//     if(btnState == "enable"){
//         $('#btnEnable').attr('state', 'enable');
//         $('#btnEnable').addClass('btnEnable');
//     }
// })

// $('#btnEnable').click(function(e){
//     let state = $(this).attr('state');
//     if(state == 'disable'){
//         $(this).attr('state', 'enable');
//         $(this).addClass('btnEnable');
//         state = true;
//     }else{
//         $(this).attr('state', 'disable');
//         $(this).removeClass('btnEnable');
//         state = false;
//     }
//     state == true ? ( localStorage.setItem('btnState', 'enable')) : (localStorage.setItem('btnState', 'disable'));
//     chrome.tabs.executeScript({file: 'jquery.js'},function(){
//         chrome.tabs.executeScript({
//             code: `
//                 var appState = ${state};
//             `    
//         },function(){
//             chrome.tabs.executeScript({file: 'handler.js'});
//         })
//     })
// })



