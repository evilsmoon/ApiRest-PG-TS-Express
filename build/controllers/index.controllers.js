"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const database_1 = require("../database");
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield database_1.pool.query("Select * From Users");
        // console.log(resp.rows)
        return res.status(200).json(resp.rows);
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json("Internal Server Error");
    }
});
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield database_1.pool.query(`Select * From Users Where ID=${parseInt(req.params.id)}`);
        // console.log(resp.rows)
        return res.status(200).json(resp.rows);
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json("Internal Server Error");
    }
});
exports.postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const resp = yield database_1.pool.query(`insert into users (name,email) values ($1,$2)`, [name, email]);
        return res.status(201).json({
            message: "user created Successfully",
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json("Internal Server Error");
    }
});
exports.putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const resp = yield database_1.pool.query(`Update Users Set name =  $1 , email = $2 Where ID=${parseInt(req.params.id)}`, [name, email]);
        // console.log(resp.rows)
        return res.status(200).json({
            message: `user ${req.params.id} Updated Successfully`,
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json("Internal Server Error");
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield database_1.pool.query(`delete from Users Where ID=${parseInt(req.params.id)}`);
        // console.log(resp.rows)
        return res.status(200).json({
            message: `user ${req.params.id} deleted Successfully`,
        });
    }
    catch (error) {
        // console.log(error)
        return res.status(500).json("Internal Server Error");
    }
});
