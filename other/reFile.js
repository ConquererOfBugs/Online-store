const Rout = require("../frameworks/Rout");
const controller = require('./user-controller')

const router = new Rout();


router.get('/users', controller.GetUser())

// router.get("/main", (req, res) => {
//     res.end("Main")
// });

// router.get("/users", (req, res) => {

// });

router.post("/users", )

// router.get("/posts", (req, res) => {
//     res.end("posts")
// });


module.exports = router;

(req, res) => {
    // res.writeHead(200, {'Content-type': 'application/json'});
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    };
    console.log(req.params);
    res.send(users);
}

//===============================================================================================

const users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Vladimir"},
    {id: 3, name: "Oleg"},
];

const GetUser = (req, res) => {
    // res.writeHead(200, {'Content-type': 'application/json'});
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    };
    console.log(req.params);
    res.send(users);
} 

const createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
};

module.exports = {
    GetUser,
    createUser,
}

//===========================================================================================================

const Rout = require("../frameworks/Rout");
const controller = require('./user-controller')

const router = new Rout();

const users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Vladimir"},
    {id: 3, name: "Oleg"},
];

router.get("/users", controller.GetUser);

router.post("/users", controller.createUser);


module.exports = router

//===============================================================================================================

const users = [
    {id: 1, name: "Vasya"},
    {id: 2, name: "Vladimir"},
    {id: 3, name: "Oleg"},
];

const GetUser = (req, res) => {
    // res.writeHead(200, {'Content-type': 'application/json'});
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    };
    console.log(req.parasm);
    res.send(users);
};

const createUser = (req, res) => {
    // res.writeHead(200, {'Content-type': 'application/json'});
    // console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(user)
};

module.exports = {
    GetUser,
    createUser,
}
