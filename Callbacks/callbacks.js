let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Gus'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);

};

getUser(31, (userObject) => {
    console.log(userObject);
});