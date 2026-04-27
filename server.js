const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const places = [
  {
    name: 'Roanne centre',
    area: '42300 Roanne',
    reason: 'Meilleur choix pour arriver à vélo, dîner et repartir facilement.',
    distance: 'Sur ou très proche de la fin du GPX',
    airbnbUrl: 'https://www.airbnb.fr/rooms/1505757681512179113?adults=3&check_in=2026-06-20&check_out=2026-06-21&search_mode=regular_search&amenities%5B%5D=51&source_impression_id=p3_1777292514_P3LCDg0pKyFWmhPp&previous_page_section_name=1000&federated_search_id=488561ea-79ba-436b-9356-bf6e25982a45'
  },
  {
    name: 'Le Coteau',
    area: '42120 Le Coteau',
    reason: 'Très pratique pour cyclistes, calme, souvent plus simple pour stocker les vélos.',
    distance: 'Très proche de Roanne et du tracé',
    airbnbUrl: 'https://www.airbnb.fr/rooms/1263785638547949218?adults=3&check_in=2026-06-20&check_out=2026-06-21&search_mode=regular_search&amenities%5B%5D=51&source_impression_id=p3_1777292514_P32wvgTSM7reWmpG&previous_page_section_name=1000&federated_search_id=488561ea-79ba-436b-9356-bf6e25982a45'
  },
  {
    name: 'Commelle-Vernay',
    area: '42120 Commelle-Vernay',
    reason: 'Option plus tranquille, adaptée si vous voulez éviter le centre-ville.',
    distance: 'Proche du parcours vélo avant Roanne',
    airbnbUrl: 'https://www.airbnb.fr/rooms/996177614322511893?adults=3&check_in=2026-06-20&check_out=2026-06-21&search_mode=regular_search&amenities%5B%5D=51&source_impression_id=p3_1777292513_P3iEpHWWE2m0N5kE&previous_page_section_name=1000&federated_search_id=488561ea-79ba-436b-9356-bf6e25982a45'
  },
  {
    name: 'Mably',
    area: '42300 Mably',
    reason: 'Utile si vous continuez vers le nord après Roanne.',
    distance: 'À quelques kilomètres de Roanne',
    airbnbUrl: 'https://www.airbnb.fr/rooms/24146701?adults=3&check_in=2026-06-20&check_out=2026-06-21&search_mode=regular_search&source_impression_id=p3_1777292613_P3_4RQi41Fywd9C0&previous_page_section_name=1000&federated_search_id=c002aaec-024e-43a9-ac8d-dd1d0fc05e33'
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
