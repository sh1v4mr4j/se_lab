function fun(){
    var dis=sessionStorage.getItem('dis')
    let set = new Set();
    axios.get("http://localhost:8000/api/school")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
        if(res.data[i].district==dis){
        if(!set.has(res.data[i].block)){
            set.add(res.data[i].block)
        document.getElementById('card1').innerHTML+=`
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
            <img src="https://i.pinimg.com/originals/58/65/fe/5865fe119dc26153f88e7f3b18c1dd45.jpg" class="card-img-top" alt="Image not found">
            <div class="card-body">
            <h5 class="card-title"></h5>
            <input type="button" class="btn btn-primary" placeholder="Block"  value="${res.data[i].block}" onclick="order(this)" style="color:dark;" >
            </div>
            </div>
        <div>
        `}}}
    })
    .catch((err)=>{
        console.log(err)
    })
}

function order(objButton){
    sessionStorage.setItem("block",objButton.value)
    window.open('school.html','_self');
}
