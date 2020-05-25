function fun(){
    var school=sessionStorage.getItem('school')
    axios.get("http://localhost:8000/api/student/")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
        if(res.data[i].school==school){
        var val=res.data[i].id+' '+res.data[i].name
        //console.log(val)
        document.getElementById('t').innerHTML+=`
        <tr>
          <td>${res.data[i].name}</td>
          <td>${res.data[i].attendance}</td>
          <td><input id="${res.data[i].id}" placeholder="Enter updated value" type="text"><button style="margin-left: 5px" value="${val}" onclick="f(this)" class='btn btn-primary'>update</button></td>
        </tr>
        `}}
    })
    .catch((err)=>{

    })
}

function f(obj){
    var school=sessionStorage.getItem('school')
    console.log(obj.value)
    var str=obj.value
    var d=str.split(" ")
    var name=d[1]
    var id = d[0]
    var attendance=document.getElementById(id).value+"%"
    console.log(attendance)
    axios.put(`http://localhost:8000/api/student/${id}/`,{
        id: id,
        name : name,
        school : school,
        attendance :attendance
    })
    .then((res)=>{
        location.reload();
    })
    .catch((err)=>{
        console.log(err)
    })

}