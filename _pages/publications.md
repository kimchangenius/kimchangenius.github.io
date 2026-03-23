---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="pub-category">SCI</h2>
{% bibliography --group_by none --query @*[pub_category=SCI] %}

<h2 class="pub-category">KCI</h2>
{% bibliography --group_by none --query @*[pub_category=KCI] %}

<h2 class="pub-category">Academic Conference</h2>
{% bibliography --group_by none --query @*[pub_category=Conference] %}

<h2 class="pub-category">IPR</h2>
{% bibliography --group_by none --query @*[pub_category=IPR] %}

</div>
