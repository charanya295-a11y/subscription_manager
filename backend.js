let subscriptions = [];

function addSubscription() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let date = document.getElementById("date").value;

    if (name === "" || price === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    subscriptions.push({
        name: name,
        price: Number(price),
        date: date
    });

    displaySubscriptions();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("date").value = "";
}

function displaySubscriptions() {
    let list = document.getElementById("subscriptionList");
    list.innerHTML = "";

    subscriptions.forEach((sub, index) => {
        list.innerHTML += `
            <div class="subscription">
                <h3>${sub.name}</h3>
                <p>Price: ₹${sub.price}</p>
                <p>Renewal Date: ${sub.date}</p>
                <button onclick="deleteSubscription(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteSubscription(index) {
    subscriptions.splice(index, 1);
    displaySubscriptions();
}
