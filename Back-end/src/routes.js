"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var CreateMessageController_1 = require("./controllers/CreateMessageController");
var ListMessageController_1 = require("./controllers/ListMessageController");
var router = express_1.Router();
exports.router = router;
var createMessageController = new CreateMessageController_1.CreateMessageController();
var listMessageController = new ListMessageController_1.ListMessageController();
router.get('/', function (request, response) {
    return response.json({ message: 'Bem vindo a API Dio Shopping' });
});
router.get('/message', listMessageController.hanle);
router.post('/message', createMessageController.handle);
