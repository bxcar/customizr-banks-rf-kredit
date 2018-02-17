var sort_params = document.getElementById('sort-params');

jQuery(sort_params).click(function(e) {
    if (e.target.getAttribute('data-cust-att') != 'sort-parameter') return;
    // jQuery('div#list_bank ul').empty(); //I don't know why, but it's not necessary
    sortGrid(e.target.getAttribute('data-type'));
});

function sortGrid(type) {
    var elemObj = jQuery("div#list_bank ul li._1EEzS");

    elemObj.sort(function(a,b){
        if(jQuery(a).attr("data-"+ type) < jQuery(b).attr("data-"+ type)) {
            return -1;
        } else {
            return 1;
        }
    }).each(function() {
        jQuery( "div#list_bank ul" ).append(this);
        // console.log(jQuery(this).find("._2BVob")[0].innerHTML);
    });
}















// определить функцию сравнения, в зависимости от типа
/*var compare;

 switch (type) {
 case 'rate':
 compare = function(rowA, rowB) {
 return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
 };
 break;
 case 'pay':
 compare = function(rowA, rowB) {
 return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
 };
 break;
 case 'overpay':
 compare = function(rowA, rowB) {
 return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
 };
 break;
 }

 // сортировать
 rowsArray.sort(compare);

 // Убрать tbody из большого DOM документа для лучшей производительности
 grid.removeChild(ul);

 // добавить результат в нужном порядке в TBODY
 // они автоматически будут убраны со старых мест и вставлены в правильном порядке
 for (var i = 0; i < rowsArray.length; i++) {
 ul.appendChild(rowsArray[i]);
 }

 grid.appendChild(ul);*/
