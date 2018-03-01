/******************  Byta vecka  ************************/




/******************* toggle + swap från cell 1-4 (ej 0-4, var i = 1) ******************/

function toggleswappa1(el) {
    var kids = document.getElementById('toggle1').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
 }

function toggleswappa2(el) {
    var kids = document.getElementById('toggle2').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa3(el) {
    var kids = document.getElementById('toggle3').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa4(el) {
    var kids = document.getElementById('toggle4').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa5(el) {
    var kids = document.getElementById('toggle5').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa6(el) {
    var kids = document.getElementById('toggle6').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }

function toggleswappa7(el) {
    var kids = document.getElementById('toggle7').children;
     if(el.className == "out"){
          for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "over";
    }else {
        for(var i = 1; i < kids.length; i++){
        kids[i].className = "out";
    }
        el.className = "out";
    }
     
 }



/******************  Byta vecka  ************************/

var divs = ["Menu1", "Menu2"];
    var visibleDivId = null;
    function toggleVisibility(tbodyId) {
      if(visibleDivId === tbodyId) {
        //visibleDivId = null;
      } else {
        visibleDivId = tbodyId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, tbodyId, tr;
      for(i = 0; i < divs.length; i++) {
        tbodyId = divs[i];
        tr = document.getElementById(tbodyId);
        if(visibleDivId === tbodyId) {
          tr.style.display = "block";
        } else {
          tr.style.display = "none";
        }
      }
    }
   










