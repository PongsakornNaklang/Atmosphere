const request = require('request');

module.exports = {
    getHomepage: (req, res) => {

        var url = "https://api.thingspeak.com/channels/1048967/fields/1/last.json";
        var status = "";
        var colorst = "#333";
        var gcolor = "#ABE5A1";

        request(url, { json: true }, (err, resofreq, body) => {
            var val = body.field1;
            if (err) {
                return console.log(err);
            }

            if (val > 91) {
                status = "คุณภาพอากาศมีผลกระทบต่อสุขภาพมาก";
                colorst = "#CA6F1E";
                gcolor = "#FF0000";
            } else if (val > 51) {
                status = "คุณภาพอากาศมีผลกระทบต่อสุขภาพ";
                colorst = "#D68910";
                gcolor = "#FF5733";
            } else if (val > 38) {
                status = "คุณภาพอากาศปานกลาง";
                colorst = "#D4AC0D";
                gcolor = "#FFFF00";
            } else if (val > 26) {
                status = "คุณภาพอากาศดี";
                colorst = "#28B463";
                gcolor = "#ABEBC6";
            } else {
                status = "คุณภาพอากาศดีมาก";
                colorst = "#229954";
                gcolor = "#A9DFBF";
            }

            res.render('index.ejs', {
                title: "Atmosphere",
                pm2_5: val,
                status: status,
                colorst: colorst,
                gcolor: gcolor
            });
            console.log(body);
        });
    }
}