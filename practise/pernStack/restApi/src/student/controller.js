const pool = require("../../db");
const queries = require("./queries");

exports.getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
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

exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
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

exports.addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      return res.send("Email already exists");
    }

    //add student to db
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) {
          res.status(400).json({
            message: error,
          });
        }
        if (results) {
          console.log("Student create");
          res.status(201).send("Student Created Successfully!");
        }
      }
    );
  });
};

exports.removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exist in database");
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) {
        res.status(400).json({
          message: error,
        });
      }
      if (results) {
        res.status(200).send("Student removed successfully.");
      }
    });
  });
};

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student doesnot exist in the database");
    }

    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) {
        res.status(400).json({
          message: error,
        });
      }
      if (results) {
        res.status(200).send("Student updated successfully");
      }
    });
  });
};
