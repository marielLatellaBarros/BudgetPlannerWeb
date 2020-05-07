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
        .then((response) => {
            if (response.status === 201) {
                console.log(response.status + " " + response.text());
                return response;
            } else {
                console.log(response.status + " " + response.text());
                //throw response;
            }
        });
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
