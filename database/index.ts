
import { Pool } from "pg";

export const database = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port : 5432,
  database: "rappidin",
})
