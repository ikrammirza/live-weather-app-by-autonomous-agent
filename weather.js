import { writeFileSync } from 'fs';

// London coordinates
const LATITUDE = 51.5074;
const LONGITUDE = -0.1278;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}` +
  `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code` +
  `&wind_speed_unit=mph&temperature_unit=celsius&timezone=Europe/London`;

const WMO_CODES = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Fog', 48: 'Icy fog',
  51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
  61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
  71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
  80: 'Slight showers', 81: 'Moderate showers', 82: 'Violent showers',
  95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail',
};

const res = await fetch(url);
if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);

const data = await res.json();
const c = data.current;

const condition = WMO_CODES[c.weather_code] ?? `Code ${c.weather_code}`;
const time = new Date(c.time).toLocaleString('en-GB', { timeZone: 'Europe/London' });

const report = `Weather Report - London
Generated: ${new Date().toUTCString()}
Local time: ${time}

Condition:        ${condition}
Temperature:      ${c.temperature_2m}°C (feels like ${c.apparent_temperature}°C)
Humidity:         ${c.relative_humidity_2m}%
Wind:             ${c.wind_speed_10m} mph @ ${c.wind_direction_10m}°
`;

writeFileSync('report.txt', report);
console.log(report);
console.log('Saved to report.txt');
