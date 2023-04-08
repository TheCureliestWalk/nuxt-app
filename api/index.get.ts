export default async function (req, res) {
  // Handle API request
  // Send response back to client
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'Hello from the API!' }))
}
