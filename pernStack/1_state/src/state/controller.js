const pool = require("../../db");
const queries = require("./queries");

exports.getStates = (req, res) => {
  pool.query(queries.getStates, (error, results) => {
    if (error) {
      res.staus(400).json({
        message: error,
      });
    }
    if (results) {
      res.status(200).json(results.rows);
    }
  });
};

exports.getStateById = (req, res) => {
  const state_id = parseInt(req.params.id);
  pool.query(queries.getStateById, [state_id], (error, results) => {
    if (error) {
      res.status(400).json({
        message: error,
      });
    }
    if (results) {
      res.status(200).json(results.rows);
    }
  });
};

exports.addState = (req, res) => {
  const {
    country_id,
    client_id,
    state_code,
    state_name,
    create_date,
    created_by,
    status,
    last_modified_screen_id,
  } = req.body;

  //check if state exists
  pool.query(queries.checkStateExists, [state_name], (error, results) => {
    if (results.rows.length) {
      return res.send("State already exists");
    }

    //add state to db
    pool.query(
      queries.addState,
      [
        country_id,
        client_id,
        state_code,
        state_name,
        create_date,
        created_by,
        status,
        last_modified_screen_id,
      ],
      (error, results) => {
        if (error) {
          res.status(400).json({
            message: error
          })
        }
        if(results){
          // console.log("State created");
          res.status(200).send("State Created Successfully!");
        }
      }
    );
  });
};

exports.removeState = (req, res) => {
  const state_id = parseInt(req.params.id);

  pool.query(queries.getStateById, [state_id], (error, results) => {
    const noStateFound = !results.rows.length;
    if (noStateFound) {
      res.send("State does not exist in database");
    }

    pool.query(queries.removeState, [state_id], (error, results) => {
      if (error) {
        res.status(400).json({
          message: error
        })
      }
      if(results){
        res.status(200).send("State removed successfully.");
      }
    });
  });
};

exports.updateState = (req, res) => {
  const state_id = parseInt(req.params.id);
  const { state_name } = req.body;

  pool.query(queries.getStateById, [state_id], (error, results) => {
    const noStateFound = !results.rows.length;
    if (noStateFound) {
      res.send("State doesnot exist in the database");
    }

    pool.query(queries.updateStudent, [state_name, state_id], (error, results) => {
      if (error) {
        res.status(400).json({
          message: error,
        });
      }
      if(results){
        res.status(200).send("State updated successfully");
      }
    });
  });
};