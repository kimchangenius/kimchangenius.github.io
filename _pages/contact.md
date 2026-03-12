---
layout: page
title: Contact
permalink: /contact/
description: We always welcome new member.
nav: true
nav_order: 5
---

The lab is looking for excellent undergraduate and graduate students. If you want to do research in HDI Lab, please contact Donghwa Shin.

- **Email:** dhshin@kw.ac.kr
- **Office:** Room 704, Saebit-gwan, 20 Gwangun-ro, Nowon-gu, Seoul 01897, Republic of Korea
- **Number:** 82+ 2-940-8474

## Location

<div id="contact-map" style="width: 100%; height: 450px; border: 1px solid #ccc; border-radius: 8px;"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css">
<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('contact-map').setView([37.61979772807333, 127.06093970420036], 16);
  L.tileLayer('http://223.194.46.216:8665/api/maps/positron/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
  L.marker([37.61979772807333, 127.06093970420036]).addTo(map)
    .bindPopup('<b>HDI Lab</b><br>광운대학교 새빛관 704호')
    .openPopup();
  setTimeout(function() { map.invalidateSize(); }, 200);
});
</script>
