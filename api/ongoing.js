import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Kita pakai provider otakudesu lewat consumet API
    const url = 'https://consumet-api-production-e852.up.railway.app/anime/otakudesu/ongoing';
    
    const response = await axios.get(url, { timeout: 10000 });
    
    // Kirim datanya ke web kamu
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Jalur belakang juga macet, server aslinya mungkin sedang down.' });
  }
}
