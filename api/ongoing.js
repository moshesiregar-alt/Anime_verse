import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Kita arahkan ke domain .blog sesuai yang aktif sekarang
    const response = await axios.get('https://otakudesu.blog/ongoing-anime/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://otakudesu.blog/',
        'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      timeout: 15000 
    });
    
    // Kirim hasilnya ke web kamu
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Domain .blog juga sedang ketat, coba cek alamat aslinya lagi.' });
  }
}
