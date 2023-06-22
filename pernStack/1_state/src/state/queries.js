exports.getStates = "SELECT * FROM dsc_bpl.dsc_bpl.state_master";

exports.getStateById =
  "SELECT * FROM dsc_bpl.dsc_bpl.state_master WHERE state_id = $1";

exports.checkStateExists =
  "SELECT * FROM dsc_bpl.dsc_bpl.state_master WHERE state_name = $1";

exports.addState =
  "INSERT INTO dsc_bpl.dsc_bpl.state_master (country_id, client_id, state_code, state_name, create_date, created_by, status, last_modified_screen_id, last_modified_date, last_modified_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";

exports.removeState =
  "DELETE FROM dsc_bpl.dsc_bpl.state_master WHERE state_id = $1";

exports.updateState =
  "UPDATE dsc_bpl.dsc_bpl.state_master SET state_name = $1, last_modified_date = $2 WHERE state_id = $3";
