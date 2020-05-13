function createNewAccount(iban, name) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts';
    //http://localhost:8080/BudgetPlannerAPI_war/api/accounts
    let data = {'iban': iban, 'name': name};

    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        //TODO: error does not get thrown
        .then(response => {
            if(response.status === 201) {
                console.log("Account created!");
                return response;
            } else if(response.status === 204) {
                console.log("Account updated!");
                return response;
            } else {
                 throw response;
            }
        })
    //TODO: how to read error message in console and still throw it to view?
            // } else if (response.status === 400) {
            //     response.text().then(function (text) {
            //         console.log("An error occurred: " + response.status + " " + text);
            //         throw text;
            //     });
            //}
        //});
}


function removeAccount(id) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts/' + id;

    fetch(url,
        {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 202) {
                return response;
            }
        })
}
