(function() {

  var studentList = []

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){
     studentList.push($(this).children('td').slice(1,2).text());

  });

  console.log(studentList);

})();
