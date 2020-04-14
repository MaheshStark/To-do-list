     
//         $('#tableTodo > tbody:last-child').append(
//             `<tr class="table-success col-lg-10 ">
//                 <td class="pb-2 pt-2 "><label class="ml-1">${todo}</label></td>
//                 <td class="pb-2 pt-2 "><a href="dsd"><i class="far fa-check-circle text-center"></i></a></td>
//                 <td class="pb-2 pt-2 "><a href="ffd"><i class="fas fa-trash-alt text-center"></i></a></td>
//              </tr>

function addTOlist() {
    let todo = document.getElementById('todotext').value;   
    console.log(todo);
    
    let tbl = document.getElementById('tableTodo');

    let tr = document.createElement('tr');
    tr.className = 'table-success col-lg-10';

    let td1 = document.createElement('td');
    td1.className = 'pb-2 pt-2';

    let td2 = document.createElement('td');
    td2.className = 'pb-2 pt-2';

    let td3 = document.createElement('td');
    td3.className = 'pb-2 pt-2';

    let lbl = document.createElement('label');
    lbl.className = 'ml-1';
    lbl.innerHTML=document.getElementById('todotext').value;

    let a1 = document.createElement('a');

    let chk = document.createElement('i');
    chk.className = 'far fa-check-circle text-center';


    let a2 = document.createElement('a');

    let del = document.createElement('i');
    del.className = 'fas fa-trash-alt text-center';

    tbl.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.appendChild(lbl);
    td2.appendChild(a1);
    td2.appendChild(a2);
    a1.appendChild(chk);
    a2.appendChild(del);
}   