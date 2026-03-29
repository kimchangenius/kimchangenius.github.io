---
layout: page
title: Contact
permalink: /contact/
# description: We always welcome new member.
nav: true
nav_order: 7
---

<!-- The lab is looking for excellent undergraduate and graduate students. If you want to do research in HDI Lab, please contact DongHwa Shin. -->

<ul>
  <li><strong>Email:</strong> {% include obfuscated_email.liquid b64="ZGhzaGluQGt3LmFjLmty" plain_email="dhshin@kw.ac.kr" %}</li>
  <li><strong>Office:</strong> Room 704, Saebit-gwan, 20 Gwangun-ro, Nowon-gu, Seoul 01897, Republic of Korea</li>
  <li><strong>Number:</strong> 82+ 2-940-8474</li>
</ul>

#### Location

<div id="contact-map" style="width: 100%; height: 450px; border: 1px solid #ccc; border-radius: 8px; outline: none;"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css">
<style>
  #contact-map:focus, #contact-map:active,
  #contact-map *:focus, #contact-map *:active {
    outline: none !important;
    box-shadow: none !important;
  }
  #contact-map *,
  #contact-map *:before,
  #contact-map *:after {
    transition: none !important;
    animation: none !important;
  }
</style>
<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('contact-map', { zoomControl: false }).setView([37.61979772807333, 127.06093970420036], 17);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  L.marker([37.61979772807333, 127.06093970420036]).addTo(map)
    .bindPopup('<b>HDI Lab</b><br>광운대학교 새빛관 704호')
    .openPopup();
  setTimeout(function() { map.invalidateSize(); }, 200);
});
</script>
