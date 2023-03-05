---
layout: league-table-single
title: "EFL Championship"
permalink: /leagues/england-championship/index.html
share: false
sidebar:
  - text: "If you want to use the *alt-3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first."
  - text: "### Click on any team name..."
  - text: "Click on the *team name* to see graphically how any team's schedule strength evolves through the season."
---

<!-- The table below is as at the end of the 2021--2022 season. The _alt-3_ table for the new season will appear here after all teams have played 6 matches. -->

The _alt-3_ computer is currently out for a long walk.  Next update here will be on Tuesday 14 March.

<!-- This page is normally updated 2 hours after each scheduled match kickoff time, unless a match is still in play. -->

{% include leagues/england-championship/alt3-table.html %}

<!-- Derby and Reading were subject to points deductions (21 and 6 pts respectively).  These have been accounted for in the _Rate_ calculation. -->

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
{% include leagues/england-championship/rates.svg %}
</div>

{% include leagues/key.md %}

