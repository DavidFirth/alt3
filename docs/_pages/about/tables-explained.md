---
title: "The league tables explained"
permalink: "/about/tables-explained/"
share: true
sidebar:
  - text: "If you want to use the *alt-3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first."
---

An *alt-3* ranking takes proper account of each team's **schedule strength** ---
that is, whether they have played (on average, to date) unusually 'easy' or
'hard' matches.

This includes the strength of the opponents played so far, and also 
any imbalance in the numbers of matches played at home and away.  (The 'home
advantage' effect in many major football leagues can be substantial.)

The *alt-3* table displays two new columns, labelled **ePld** and **Rate**.
We describe here, just briefly,
what each of those columns refers to.

For (quite a bit!) more detail, 
please see the companion page to this one:
    [The mathematical method explained](../the-maths/).

### The two columns are as follows:

- **ePld**, the assessed **effective number of matches played** by each team.

  This
  reflects how tough a schedule each team has faced, since the start
  of the season.  An 'average' schedule results in _ePld_ being the same as the
  _actual_ number of matches played to date.  But if a team has faced a
  particularly _tough_ set of matches so far --- i.e., matches against a
  stronger than
  average set of opponents, and/or more matches played away than at home
  --- then that team has in effect used up fewer of their realistic chances to
  accumulate
  league points than their _actual_ number of matches played would indicate.  The
  team's value of _ePld_ quantifies this: the difference between the
  actual and effective matches played
  > **schedule strength = Pld &minus; ePld**

  tells us how many schedule-strength-related
  'games in hand' each such team has.

  Similarly for teams whose fixtures
  to date have been _easier_ than average: those teams'
  _ePld_ values will be _larger_
  than the actual number of matches played.

  In the _alt-3_ table, teams that currently have
  1.0 or more schedule-strength-related
  'games in hand' are <span style="background-color:#ddffdd;">highlighted in light green</span>: such teams are actually doing
  better than their accumulated league points would seem to indicate.
  Teams whose _ePld_ number _exceeds_ their actual number of matches played
  are <span style="background-color:#ffdddd;">highlighted in light red</span>: those are the teams doing appreciably less well than
  their accumulated league points would suggest.

  Where schedule-strength imbalance is so strong that
		**ePld** and **ePld** differ by more than 2.0, the
		entry in the **ePld** column is shown in **bold type**.  

- **Rate**, the **league points per effective match played**, for each team.

  **This is the column that determines the ordering of teams** in the _alt-3_ table.

  The _Rate_ --- or league points per effective match played ---
  is simply the ratio of two other columns in the table:
  > **Rate = Pts &#247; ePld**.

  Where a team's fixture schedule to date is unusually tough, or unusually easy,
  the _alt-3_ **Rate** will be substantially more informative than the
  simple tally of league points accumulated, as an indicator of current
  standing in the league.

-----

It really must be emphasised that an *alt-3* table is **not a prediction**.
The effective matches played, **ePLd**,
    and the consequent points-per-effective-match **Rate**, are
    designed specifically to reflect fairly the relative performance
    of teams since the start of the current season --- that is, to
    _represent faithfully what has happened_,
    rather than to predict 
    what will happen in the future.

A good *predictive* model would, instead,
most likely need to take into account much more information than
simply the match results seen already within the current season.

It would be of course be mathematically _possible_ to turn
    the computed **Rate** values into numbers that correspond directly to
    end-of-season points totals (for example, in the English Premier League,
    we could just multiply each team's
    computed _Rate_ by 38 to do that).  But such a 'prediction'
    would almost certainly be inferior to other possible methods ---
    methods that are not constrained to use all of (and only)
    the match-result data from
    the current season, for example.

Just to reiterate again, because it cannot be said too often:

> **The alt-3 table is not a prediction!**
          
-----


       






