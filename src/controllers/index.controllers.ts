import { Request, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const resp: QueryResult = await pool.query("Select * From Users");
    // console.log(resp.rows)
    return res.status(200).json(resp.rows);
  } catch (error) {
    // console.log(error)

    return res.status(500).json("Internal Server Error");
  }
};
export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {
    const resp: QueryResult = await pool.query(`Select * From Users Where ID=${parseInt(req.params.id)}`);
    // console.log(resp.rows)
    return res.status(200).json(resp.rows);
  } catch (error) {
    // console.log(error)

    return res.status(500).json("Internal Server Error");
  }
};
export const postUser = async  (req: Request, res: Response): Promise<Response>  => {
  try {
    const {name,email} = req.body; 
    const resp: QueryResult = await pool.query(`insert into users (name,email) values ($1,$2)`,[name,email]);
    return res.status(201).json({
      message:"user created Successfully",
      body:{
        user:{
          name,
          email
        }
      }
    });
  } catch (error) {
    // console.log(error)

    return res.status(500).json("Internal Server Error");
  }
};

export const putUser = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {
    const {name,email} = req.body; 

    const resp: QueryResult = await pool.query(`Update Users Set name =  $1 , email = $2 Where ID=${parseInt(req.params.id)}`,[name,email]);
    // console.log(resp.rows)
    return res.status(200).json({
      message:`user ${req.params.id} Updated Successfully`,
      body:{
        user:{
          name,
          email
        }
      }

    });
  } catch (error) {
    // console.log(error)

    return res.status(500).json("Internal Server Error");
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {
    const resp: QueryResult = await pool.query(`delete from Users Where ID=${parseInt(req.params.id)}`);
    // console.log(resp.rows)
    return res.status(200).json({
      message:`user ${req.params.id} deleted Successfully`,

    });
  } catch (error) {
    // console.log(error)

    return res.status(500).json("Internal Server Error");
  }
};