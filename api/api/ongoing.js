import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Vercel (Singapore/US) yang panggil Otakudesu, jadi gak kena blokir
    const response = await axios.get('https://otakudesu.cloud/ongoing-anime/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/110.0.0.0 Safari/537.36'
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dari sumber' });
  }
}
