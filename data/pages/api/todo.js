import data from '../../todos.json';

export default function handler(req, res) {
  res.status(200).json(todos);
}