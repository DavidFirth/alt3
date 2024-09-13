---
layout: league-table-single
title: "Ligue 1 (France)"
permalink: /leagues/france-ligue-1/index.html
share: false
sidebar:
  - text: "If you want to use the *alt3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first."
  - text: "### Click on any team name..."
  - text: "Click on the *team name* to see graphically how any team's schedule strength evolves through the season."
---

{% include leagues/new-season-message.md %}

{% include leagues/update-time.md %}

<!-- This page is normally updated at around 1 a.m. (UK time), on days after a match has been played. -->

{% include leagues/france-ligue-1/alt3-table.html %}

Currently Montpellier are subject to a 1-point deduction.  This has been accounted for in the _Rate_ calculation. 


<style>
.svg-wrap {
    background-color:red;
    height:0;
    padding-top:100%; /* 350px/550px */
	margin-top:-10px;
    position: relative;
}

svg {
    background-color: white;
    height: 100%;
    display:block;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
}
</style>

## Home and away points-per-match rates:

<div class="svg-wrap">
{% include leagues/france-ligue-1/rates.svg %}
</div>

{% include leagues/key.md %}
