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
            let tbl = document.getElementById('tableTodo');
            document.getElementById('todotext').classList.remove("is-invalid");
            document.getElementById('altTextForTodotext').innerHTML="";
            document.getElementById('add').classList.add("mb-3");
            let tr = document.createElement('tr');
            tr.className = 'table-success col-lg-10 mb-2 border border-light rounded mb-1';
            let td1 = document.createElement('td');
            td1.className = 'pb-2 pt-2 col-lg-10';

            let td2 = document.createElement('td');
            td2.className = 'pb-2 pt-2 col-lg-1';

            let td3 = document.createElement('td');
            td3.className = 'pb-2 pt-2 col-lg-1';

            let lbl = document.createElement('label');
            lbl.className = 'ml-1';
            lbl.innerHTML=todo;

            let a1 = document.createElement('a');
            a1.href="dffdf";

            let chk = document.createElement('i');
            chk.className = 'far fa-check-circle text-center';


            let a2 = document.createElement('a');
            a2.href="javascript:removeTask(this)";
            // a2.onclick=removeTask(this);

            let del = document.createElement('i');
            del.className = 'fas fa-trash-alt text-center';

            tbl.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            td1.appendChild(lbl);
            td2.appendChild(a1);
            td3.appendChild(a2);
            a1.appendChild(chk);
            a2.appendChild(del);
        }
    }
    
    
}   

function removeTask(ele) {
    // let row = ele.parentNode;
    // document.removeChild();
    console.log(ele);
    
}
