function collectNames() {

  var studentList = []

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){

        studentList.push($(this).children('td').slice(1,2).text());

  });

  console.log(studentList);

}

function collectAttendingNames() {

  var studentList = []

	$("#right>form>table.longlist>tbody").find('tr').slice(1, -1).each(function(){
    if ($(this).children('td').slice(2,3).children('select').val()== 0) {
      studentList.push($(this).children('td').slice(1,2).text());
    }

  });

  console.log(studentList);

}
