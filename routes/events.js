const Event = require("../models/Event");
const express = require('express')
const router = express.Router();
const nodeMailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

router.post("/", (req, res) => {
    Event.insertMany(final)
        .then((d) => { res.json({ date: "allgood" }) })
});

router.get("/", (req, res) => {
    Event.find()
        .then((data) => res.json({
            success: true,
            data: data
        }))
        .catch(err => res.json({ err: err.message }))
})

router.post('/pay', (req, res) => {
    Event.findOne({_id:req.body.id})
    .then(document=>{
        document.users.push(req.body.user)
        return document.save()
    })
    .then(()=>{
        res.json({
            success:true
        })
    })
    .catch(err=> res.json({
        err:err.message
    }))

})



// DATA TO FEED THE DATABASE
const program = [
    [
        {
            event: "Psychologie",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live avec un psychologue",
            done: false
        }, {
            event: "Film Tunisien",
            par: "",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "Film Tunisien en Streaming",
            done: false
        },
    ], [
        {
            event: "Yoga du rire",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live avec un spécialiste",
            done: false
        }, {
            event: "Chant",
            par: "Yasser Jradi",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "",
            done: false
        },
    ], [
        {
            event: "Cuisine",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Nouvelles recettes tunisiennes",
            done: false
        }, {
            event: "Chant",
            par: "Halim Yousfi",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "",
            done: false
        },
    ], [
        {
            event: "Sport",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live avec un coach",
            done: false
        }, {
            event: "Match virtuel",
            par: "",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "Match  virtuel de l'equipe nationale",
            done: false
        },
    ], [
        {
            event: "Soft Skills",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live avec un spécialiste",
            done: false
        }, {
            event: "Chant",
            par: "Amel Mathlouthi",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "",
            done: false
        },
    ], [
        {
            event: "Yoga",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live",
            done: false
        }, {
            event: "Théatre",
            par: "",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "One man show LIVE",
            done: false
        },
    ], [
        {
            event: "Sport",
            par: "",
            dateStart: "12:00",
            dateEnd: "13:00",
            description: "Seance live avec un Coach",
            done: false
        }, {
            event: "Rap",
            par: "",
            dateStart: "21:00",
            dateEnd: "22:30",
            description: "Live Session",
            done: false
        },
    ],

]

const progf = program.map((e, index) => {
    return e.map(el => { return ({ ...el, jour: index, montant:2 }) })
})
var final = [];

progf.forEach(e => {
    e.forEach((el) => {
        final.push(el)
    })
})
console.log(final)

module.exports = router;
