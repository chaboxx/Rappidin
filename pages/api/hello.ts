// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../database'

type Data = {
  name: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>){

  const { rows } = await database.query("SELECT NOW()");

  console.log(rows);

  return res.status(200).json({
    name: rows[0].now,
  })
}
