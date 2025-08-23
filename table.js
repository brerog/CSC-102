            // defining our array and what's in it
            let arrMats = [
            ["Gold ", "400-500 ", "Opaque ", "90-110", ">10,000 "],
            ["Zirconia ", "900-1200 ", "Medium-High ", "205-210 ", "~8 "],
            ["e.max ", "360-500 ", "High ", "~95 ", "~3-4 "],
            ["3D printed crown ", "~125-175 ", "High ", "~4.2-8.3 ", "~1033 "],
            ];

            // for loop to loop our table rows
            for (let i=0; i<arrMats.length; i++){
                // creates a tr tag
                let tr = document.createElement("tr");
                // for loop for each column of data
                for (let j=0; j<arrMats[i].length; j++){

                    // create td tag for each piece of data in the array
                    let td = document.createElement("td");

                    // set the data from row i and column j to the td we just created above
                    td.textContent = arrMats[i][j];

                    //add the td to the tr
                    tr.appendChild(td);
                    }

                    //add the row to the table using appendchild
                    document.getElementById("tblData").appendChild(tr);
            }