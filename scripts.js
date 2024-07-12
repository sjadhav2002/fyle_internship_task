function updatelist(id){
    buttons = ["slide0", "slide1", "slide2"];
    for(var i=0;i<3;i++){
        btn = document.getElementById(buttons[i])
        if(id === buttons[i]){
            btn.classList.add("active")
        }
        else{
            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
            }
        }
    }
}

function cardactive(id){
    cards = {
        "card1":"image.png",
        "card2":"image2.jpg",
        "card3":"image3.jpg"
    };
    for (const key in cards) {
        card = document.getElementById(key)
        if (cards.hasOwnProperty(key)) {
            const value = cards[key];
            if(id === key){
                card.classList.add("project_active")
                image = document.getElementById("card_image")
                image.src = `assets/${value}`
            }
            else{
                if (card.classList.contains("project_active")) {
                    card.classList.remove("project_active");
                }
            }
        }
    }
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Assuming a simple validation here
    if(email && firstName && lastName) {
        const url = 'https://getform.io/f/bjjejdxb'; // Replace with your variable URL
        const formData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors as needed
        });
        $('#contactModal').modal('hide');
    } else {
        alert('Please fill out all required fields.');
    }


});


document.getElementById('email').addEventListener('click', function() {
    const label = document.getElementById("emaillabel")
        label.classList.add("filled")
});
document.getElementById('email').addEventListener('blur', function() {
    const inputValue = this.value;
    const label = document.getElementById("emaillabel");

    if (inputValue === '') {
        label.classList.remove("filled");
    }
});
document.getElementById('firstName').addEventListener('click', function() {
    const label = document.getElementById("fnamelabel")
        label.classList.add("filled")
});
document.getElementById('firstName').addEventListener('blur', function() {
    const inputValue = this.value;
    const label = document.getElementById("fnamelabel");

    if (inputValue === '') {
        label.classList.remove("filled");
    }
});
document.getElementById('lastName').addEventListener('click', function() {
    const label = document.getElementById("lnamelabel")
        label.classList.add("filled")
});
document.getElementById('lastName').addEventListener('blur', function() {
    const inputValue = this.value;
    const label = document.getElementById("lnamelabel");

    if (inputValue === '') {
        label.classList.remove("filled");
    }
});