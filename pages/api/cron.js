export default async function handler(req, res) {
  try {
    await fetch('https://api.vercel.com/v1/integrations/deploy/prj_HZGwP1wFK1jsbAzxEDZgqc9uSBaj/l8T6Yq7nly', {
        method: 'post'
    })
    res.status(200).json({ message: 'Webhook triggered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error triggering webhook.' });
  }
}