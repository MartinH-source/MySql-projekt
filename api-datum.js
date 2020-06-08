const dateFormat = require('dateformat');

exports.apiDatum = function (req, res, obj) {
    let dt = new Date();
    obj.datum = dateFormat(dt, "d.mmm yyyy");
}