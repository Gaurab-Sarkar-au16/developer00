const pool = require("../../db");
const queries = require("./queries");

exports.getStates = async (req, res) => {
  try {
    const allStates = await pool.query(queries.getStates);
    res.status(200).json(allStates.rows);
  } catch (err) {
    console.log(err.message);
    res.staus(400).json({
      message: err.message,
    });
  }
};

exports.getStateById = async (req, res) => {
  try {
    const { id } = req.params;
    const singleState = await pool.query(queries.getStateById, [id]);
    res.status(200).json(singleState.rows);
  } catch (err) {
    console.log(err.message);
    res.staus(400).json({
      message: err.message,
    });
  }
};

exports.addState = async (req, res) => {
  try {
    const {
      country_id,
      client_id,
      state_code,
      state_name,
      created_by,
      status,
      last_modified_screen_id,
      last_modified_by,
    } = req.body;

    const state = await pool.query(queries.checkStateExists, [state_name]);
    if (state.rows.length > 0) {
      res.json({ message: "State with the same name exists" });
    }

    const presentDate = new Date();
    const create_date = presentDate;
    const last_modified_date = presentDate;
    console.log(create_date, last_modified_date);

    const newState = await pool.query(queries.addState, [
      country_id,
      client_id,
      state_code,
      state_name,
      create_date,
      created_by,
      status,
      last_modified_screen_id,
      last_modified_date,
      last_modified_by,
    ]);
    res.status(200).json({
      message: "New state created",
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.removeState = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await pool.query(queries.getStateById, [id]);
    if (!state.rows.length) {
      res.json({ message: "State doesnot exists" });
    }
    const removeState = await pool.query(queries.removeState, [id]);
    res.json("State was deleted!");
    // console.log(state.rows.length)
    // res.send(state.rows)
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateState = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const state = await pool.query(queries.getStateById, [id]);
    if (!state.rows.length) {
      return res.json({
        message: "State doesnot exists",
      });
    }

    const presentDate = new Date();
    const last_modified_date = presentDate;

    const updateState = await pool.query(queries.updateState, [name, last_modified_date, id]);
    res.status(200).json({
      message: "State has been Updated",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};
