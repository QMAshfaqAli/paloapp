const axios = require('axios');

module.exports = (app) => {

    app.get(`/api/stories`, async (req, res) => {
        axios.get('https://prothomalo-web.qtstage.io/api/v1/stories?offset='+req.query.offset+'&limit=' + req.query.limit + '&fields=' + req.query.fields)
            .then(response => {
                return res.status(200).send(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.get(`/api/menu-groups`, async (req, res) => {
        axios.get('https://prothomalo-web.qtstage.io/api/v1/menu-groups')
            .then(response => {
                return res.status(200).send(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    })
};