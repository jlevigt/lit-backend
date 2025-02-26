import pool from "../config/database.js";

class UserRepository {
  async listUsers() {
    const query = {
      text: "SELECT * FROM users",
      values: [],
    };

    const results = await pool.query(query);

    return results.rows;
  }

  async findUserByUsername(username) {
    const query = {
      text: "SELECT * FROM users WHERE username=$1",
      values: [username],
    };

    const results = await pool.query(query);

    return results.rows[0];
  }

  async findUserByEmail(email) {
    const query = {
      text: "SELECT * FROM users WHERE email=$1",
      values: [email],
    };

    const results = await pool.query(query);

    return results.rows[0];
  }

  async insertUser(postData) {
    const query = {
      text: "INSERT INTO users (username, email, phone_number, cpf) VALUES ($1, $2, $3, $4)",
      values: [
        postData.username,
        postData.email,
        postData.phone_number,
        postData.cpf,
      ],
    };

    await pool.query(query);

    return;
  }
}

export default UserRepository;
