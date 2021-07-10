{
    let controlElement = `
    <div id="hightLightContextMenu">
        <button id="btnHighlight" class="btn btn-sm btn-primary">Highlights</button>
        <br>
        <button id="btnRemoveHighLight" class="btn btn-sm btn-danger">Remove HighLights</button>
        <button id="btnCloseMenu">x</button>
    </div>`
    $('body').append(controlElement);
}


var topPos = 0;
var leftPos = 0;
$(document).mousemove(function(e){
    leftPos = e.clientX;
    topPos = e.clientY;
})

var hightLightContextMenu = $('#hightLightContextMenu');
var btnHighlight = $('#btnHighlight');
var btnRemoveHighLight = $('#btnRemoveHighLight');
var btnCloseMenu = $('#btnCloseMenu');



var doc = document;
if(appState){
    function HighLight(e){
        e.stopPropagation();
        let selection = window.getSelection();
        if(selection.extentOffset - selection.anchorOffset < 1){
            $(hightLightContextMenu).fadeOut();
        }else{
            if(selection.anchorNode != null || selection.anchorNode != undefined){
                $(hightLightContextMenu).css({'left': `${(leftPos-50)}px`, 'top': `${((topPos - 80))}px` });
                $(hightLightContextMenu).show();
            }
        }
        // HIGHLIGHT ACTION
        btnHighlight.click(function(e){
            if(selection.anchorNode.data){
                let parentElement = selection.anchorNode.parentElement;
                let textSelect = selection.anchorNode.data.slice(selection.anchorOffset, selection.extentOffset);
    
                let parentElementHTML = parentElement.innerHTML;
                let stringHightLight = `<text class="highLightsText">${textSelect}</text>`;
                let newHTML = parentElementHTML.replace(textSelect, stringHightLight);
                $(parentElement).html(newHTML);
            }
            $(hightLightContextMenu).hide();
        })
        // REMOVE HIGHLIGHT ACTION
        btnRemoveHighLight.click(function(e){
            e.stopImmediatePropagation();
            if(selection.anchorNode.data){
                let parentElement = selection.anchorNode.parentElement;
                let parentHTML = parentElement.outerHTML;
                let parentContainElement = $(parentElement).parent()[0].innerHTML;
    
                let newHTML = parentContainElement.replace(parentHTML, `${parentElement.innerHTML}`);
                $(parentElement).parent().html(newHTML);
            }
            $(hightLightContextMenu).hide();
        })
        // CLOSE MENU ACTION
        btnCloseMenu.click(function(e){
            e.stopImmediatePropagation();
            $(hightLightContextMenu).hide();
        })
    }
    doc.addEventListener('selectionchange', HighLight);
}else{
    doc.removeEventListener('selectionchange', HighLight);
}
