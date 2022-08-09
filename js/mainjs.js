function makeEm(tk,ten,email,mat,ngaylam,lươngCb,chucvu,giolam)
{
     this.tk=tk;
    this.ten=ten;
    this.email=email;
    this.mat=mat;
    this.ngaylam=ngaylam;
    this.lươngCb=lươngCb;
    this.chucvu=chucvu;
    this.giolam=giolam;
    this.tongluong=function(){
      return 2
      }
    this.xeploai=function()
      {return 'kha'
        //   var loai='';
        //   if(giolam>=192){
        //       return loai='xuat sac'
      
        //   }else if(giolam>=176){
        //       return loai='giỏi'
      
        //   }else if(giolam>=160){
        //       return loai='kha'
        //   }else if(giolam<160){
        //       return loai='trung binh'
        //   }
      }
  
 }
 var dsach=[];


document.querySelector('#btnThemNV').onclick= function()
{
    var tkNv=document.querySelector('#tknv').value;
    var ten=document.querySelector('#name').value;
    var email=document.querySelector('#email').value;
    var mat=document.querySelector('#password').value;
    var datepicker=document.querySelector('#datepicker').value;
    var luongcoban=Number(document.querySelector('#luongCB').value);
    var chucvu=document.querySelector('#chucvu').value;
    var gioLam=document.querySelector('#gioLam').value;


 var nv= new makeEm(tkNv,ten,email,password,datepicker,luongcoban,chucvu,gioLam);
  
//   var hehe= nv.tongluong()
//   console.log(hehe);
  
 dsach.push(nv);

 console.log(dsach);
  renderDsachnv(dsach)
  saveDs(dsach,'key')
 

}
// function tong()

function renderDsachnv(arr){
 var trakq='';
 for(i=0;i<arr.length;i++){
    arr[i].tongluong=function(){
        return 2
    }
    arr[i].xeploai=function(){
        return 'kha'
    }
  var xuatNv=`
    <tr>
	<td>${arr[i].tk}</td>
	<td>${arr[i].ten}</td>
	<td>${arr[i].email}</td>
	
	<td>${arr[i].ngaylam}</td>

	<td>${arr[i].chucvu}</td>
	
	<td>${arr[i].tongluong()}</td>
	<td>${arr[i].xeploai()}</td>
	<td>
    <button class="alert alert-success"  onclick='suaNv(${arr[i].tk})' >Update</button>
    <button class="alert alert-danger"  onclick='xoaNv(${arr[i].tk})' >remove</button>
    </td>
    
</tr>
    `
    trakq+=xuatNv
 }
document.querySelector("#tableDanhSach").innerHTML=trakq}


 function saveDs(arr,key){
    var save =JSON.stringify(arr);;
    localStorage.setItem(key,save)
 }

 function getDs(key){
    var get  = localStorage.getItem(key);
    var ds = JSON.parse(get);
    return ds;
 }
 window.onload =function(){
    dsach=getDs('key');     renderDsachnv(dsach);

 }

//  function xoaNv(tk){
//   var numxoa=-1;
//   for(i=0;i<dsach.length;i++){
//     if(dsach[i].tk===tk){
//         numxoa=i;
//         break
//     }
//   }
//   if(numxoa!==-1){
//     dsach.splice(numxoa,1);
//   }
//   renderDsachnv(dsach);
//   saveDs(dsach,'key')
// }
// function suaNv(tk){
//   var numsua=-1;
//   for(i=0;i<dsach.length;i++){
//     if(dsach[i].tk===tk){
//         numsua=i;
//         break
//     }
//   }
//   if(numsua!==-1){
//     document.querySelector('#tknv').value=dsach[i].tk
//     document.querySelector('#name').value=dsach[i].ten
//     document.querySelector('#email').value=dsach[i].email
//     document.querySelector('#password').value=dsach[i].mat
//     document.querySelector('#datepicker').value=dsach[i].datepicker
//     // document.querySelector('#luongCB').value=dsach[i].luongcoban
//     document.querySelector('#chucvu').value=dsach[i].chucvu
//     // document.querySelector('#gioLam').value=dsach[i]

//   }
// }