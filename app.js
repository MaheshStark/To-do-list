let doneList =[];
function addTOlist() {
    let todo = document.getElementById('todotext').value;   
    
    if (todo=='') {
        document.getElementById('todotext').classList.add("is-invalid");
        document.getElementById('altTextForTodotext').innerHTML="input a todo before add!";
        document.getElementById('add').classList.remove("mb-3");

    } else {
        let found = false;
        
        var table = document.getElementById("tableTodo");
        var rows = document.getElementsByTagName("tr");
        for ( var i = 0; i <rows.length ; i++ ) {
            var tr = table.rows[i];
            var cll = tr.cells[0];                                                              
            if(cll.innerText== todo) {
                found = true;
            }
        }

        if (found==true) {
            document.getElementById('todotext').classList.add("is-invalid");
            document.getElementById('altTextForTodotext').innerHTML="This task is already added!";
            document.getElementById('add').classList.remove("mb-3");
        } else {
            document.getElementById('todotext').value="";
            let tbl = document.getElementById('tableTodo');
            document.getElementById('todotext').classList.remove("is-invalid");
            document.getElementById('altTextForTodotext').innerHTML="";
            document.getElementById('add').classList.add("mb-3");
            let tr = document.createElement('tr');
            tr.className = 'table-success col-lg-10 mb-2 border border-light rounded mb-1';
            tr.id=rows.length+1;
            let td1 = document.createElement('td');
            td1.className = 'col-lg-11';

            let td2 = document.createElement('td');
            td2.className = 'col-lg-1';

            let btnDone= document.createElement('button');
            btnDone.className = 'doneCaller btn btns btn-success col-lg-12';
            // btnDone.id=rows.length+1;
            btnDone.setAttribute('onClick', 'doneTask(this.parentNode.parentNode.id)');

            let td3 = document.createElement('td');
            td3.className = 'col-lg-1 ';

            let btnRemove= document.createElement('button');
            btnRemove.className = 'deleteCaller btn btns btn-danger col-lg-12';
            // btnRemove.id=rows.length+1;
            btnRemove.setAttribute('onClick', 'removeTask(this.parentNode.parentNode.id)');

            let lbl = document.createElement('label');
            lbl.className = 'font-weight-bold ml-1 pt-1';
            lbl.innerHTML=todo;


            let chk = document.createElement('i');
            chk.className = 'far fa-check-circle text-center';


            let del = document.createElement('i');
            del.className = 'fas fa-trash-alt text-center';

            tbl.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            td1.appendChild(lbl);
            td2.appendChild(btnDone);
            td3.appendChild(btnRemove);
            btnDone.appendChild(chk);
            btnRemove.appendChild(del);
        }
        
    }
    
    
}   

function removeTask(ele) {
    console.log(ele);
    document.getElementById(ele).remove(); 
}
function doneTask(ele) {
    doneList.push(document.getElementById(ele).childNodes[0].childNodes[0].innerHTML);
    console.log(doneList);
    document.getElementById(ele).remove(); 
}

    