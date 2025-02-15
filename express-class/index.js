const express = require("express");
const app = express();

var users = [
    {
        name: "Abdullah",
        kidneys: [
            {
                healthy: false,
            },
        ],
    },
];

app.use(express.json());

function numberOf() {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    return {
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    };

}

app.get("/", function (req, res) {

    const { numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys } = numberOf();
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    res.json({
        msg: "Done",
    });
});

app.put("/", function (req, res) {
    const { numberOfUnhealthyKidneys } = numberOf();
    if (numberOfUnhealthyKidneys == 0) {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
    else {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            users
        });
    }

});

app.delete("/", function (req, res) {
    const { numberOfUnhealthyKidneys } = numberOf();
    if (numberOfUnhealthyKidneys > 0) {
        let updatedUsers = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                updatedUsers.push({
                    healthy: true,
                });
            }
        }
        users[0].kidneys = updatedUsers;
        res.json({
            users,
        });
    } else {
        res.status(411).json({
            msg: "You have no unhealthy kidney",
        });
    }
});

// function isThereAtLeastOneBadKidney() {
//     let atLeastOneBadKidney = false;
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//         if (!users[0].kidneys[i].healthy) {
//             atLeastOneBadKidney = true;
//             // return true;
//         }
//     }
//     return atLeastOneBadKidney;
//     // return false;
// }
app.listen(3000);
