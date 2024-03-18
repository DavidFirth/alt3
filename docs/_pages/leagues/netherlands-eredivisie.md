---
layout: league-table-single
title: "Eredivisie (Netherlands)"
permalink: /leagues/netherlands-eredivisie/index.html
share: false
sidebar:
  - text: "If you want to use the *alt3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first. "
  - text: "### Click on any team name..."
  - text: "Click on the *team name* to see graphically how any team's schedule strength evolves through the season."
---

{% include leagues/update-time.md %}

{% include leagues/netherlands-eredivisie/alt3-table.html %}

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
{% include leagues/netherlands-eredivisie/rates.svg %}
</div>

{% include leagues/key.md %}
