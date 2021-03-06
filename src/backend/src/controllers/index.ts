import express from "express";

type PromiseVoid = Promise<void>;
type Req = express.Request;
type Res = express.Response;

class User {
  public static async getAllUsers(_: Req, res: Res): PromiseVoid {
    res.send("hello world");
  }

  public static async createUser(_: Req, res: Res): PromiseVoid {
    res.send("hello world");
  }
}

export default User;
