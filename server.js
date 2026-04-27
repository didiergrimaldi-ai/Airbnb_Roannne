const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const places = [
  {
    name: 'Nuit 1 — 20 au 21 juin',
    area: 'Roanne / proche fin GPX',
    reason: 'Logement pour la première nuit après l\'arrivée à vélo.',
    distance: 'Sur ou très proche de la fin du GPX',
    airbnbUrl: 'https://www.airbnb.fr/rooms/1384722885232786640?adults=3&check_in=2026-06-20&check_out=2026-06-21&guests=3&search_mode=regular_search&amenities%5B%5D=51&source_impression_id=p3_1777295095_P3RGiRsYR9Tk_FpB&previous_page_section_name=1000&federated_search_id=cf52a58c-0f02-4b61-909b-8a521f700a39'
  },
  {
    name: 'Nuit 2 — 21 au 22 juin',
    area: 'Roanne / proche fin GPX',
    reason: 'Logement pour la deuxième nuit.',
    distance: 'Sur ou très proche de la fin du GPX',
    airbnbUrl: 'https://www.airbnb.fr/rooms/1469685030471948958?adults=3&check_in=2026-06-21&check_out=2026-06-22&guests=3&search_mode=regular_search&amenities%5B%5D=51&children=0&infants=0&pets=0&source_impression_id=p3_1777295095_P3WSGT0SMmIWKaTW&previous_page_section_name=1000&federated_search_id=cf52a58c-0f02-4b61-909b-8a521f700a39'
  }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/places', (req, res) => {
  res.json(places);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
