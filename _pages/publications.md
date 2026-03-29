---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---


<div class="publications-page">

{% include bib_search.liquid %}

<div class="publications">

<h2 class="pub-category">SCI</h2>
{% bibliography --group_by none --query @*[pub_category=SCI] %}

<hr>

<h2 class="pub-category">KCI</h2>
{% bibliography --group_by none --query @*[pub_category=KCI] %}

<hr>

<h2 class="pub-category">Academic Conference</h2>
{% bibliography --group_by none --query @*[pub_category=Conference] %}

<hr>

<h2 class="pub-category">IPR</h2>
{% bibliography --group_by none --query @*[pub_category=IPR] %}

</div>

</div>
