import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://otakudesu.cloud/ongoing-anime/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://otakudesu.cloud/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
      },
      timeout: 10000 // Tunggu maksimal 10 detik
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal tembus pertahanan sumber. Coba lagi nanti.' });
  }
}
