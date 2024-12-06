---
title: "The mathematical method explained"
permalink: "/about/the-maths/"
share: false
sidebar:
  - text: "If you want to use the *alt3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first."
---

A full academic research paper, for publication in a peer-reviewed journal, 
is currently in preparation. That paper will contain all the 
details of the *alt-3* method, along with the mathematical justification for its
use to produce routinely better league-table rankings.

For now, we will show here the key mathematical formulae behind the method --- 
for those who enjoy such things!

## The mathematical model

The essence of *alt-3* is to determine two numeric, nonnegative-valued 
*strengths*, which we label $$h_i$$ (for home strength) and $$a_i$$ (for away strength),
for each team $$i$$ in the league, on the basis of the team's 
match results to date within the current season.  The scale on which
team strength is measured is such that the average strength value is 1. 

The strengths $$h_i$$ and $$a_i$$ 
are formally *parameters in a statistical model* --- 
a model which 
specifies the probability of every possible match outcome for the whole season.

Specifically, when home team $$i$$ plays away team $$j$$, the three possible
match outcomes (that is to say: $$i$$ wins, $$j$$ wins, or a draw) 
are taken to have the following probabilities:

$$\textrm{pr}(i\textrm{ beats }j)={h_i \over h_i + a_j + 
\delta(h_i a_j)^{1/3}}$$

$$\textrm{pr}(j\textrm{ beats }i)={a_j \over h_i + a_j + 
\delta(h_i a_j)^{1/3}}$$

$$\textrm{pr}(\textrm{draw})={\delta(h_i a_j)^{1/3} \over h_i + a_j + 
\delta(h_i a_j)^{1/3}}$$

The model depends on one further parameter, in addition 
to the team-specific strengths $$h_i$$ and $$a_i$$.  This is
$$\delta$$, the 'prevalence of draws' parameter. 
The specific interpretation
of $$\delta$$ is that the probability of a draw between two average-strength 
teams (that is, teams $$i$$ and $$j$$ with $$h_i = a_j = 1$$) is
$$\delta / (2 + \delta)$$.  Thus, for example, the value $$\delta = 1$$ would
imply that the probability of a draw in such a hypothetical match between
average teams is $$1/3$$.

### Isn't that just a generalized Bradley-Terry model?

Yes, it is! 

(But that is a nerdy question, of course. 
Don't worry if you have never heard of the
Bradley-Terry model before. The main point of *this* part of the page
is to say briefly where that strange-looking 1/3 power comes from,
in the formulae above --- and why it is important.)

The Bradley-Terry model, and variants of it, are well established in the
ranking of sports players and teams. A well-known example is the 
[Krach](http://vaporia.com/sports/krach.html)
method that is used in US college hockey (i.e., ice hockey). 
And the
[Elo rating](https://en.wikipedia.org/wiki/Elo_rating_system) 
method, well known especially for its use to rank 
chess players, is also closely related to the Bradley-Terry model.

The probabilities shown above are in fact very similar to the model introduced in 
[Davidson and Beaver (1977)](http://www.jstor.org/stable/2529467), 
which extends the Bradley-Terry model to handle
draws (ties) and a home-advantage effect (or 'order effect').  The differences
are: 

- the power 1/3 that appears in our formulae above, which
determines how the probability of a draw relates to relative team strengths;
whereas the Davidson-Beaver model has power 1/2 instead.
- our model allows home advantage (or perhaps disadvantage) to be different for different teams; whereas in the Davidson-Beaver model the ratios $$h_i / a_i$$ are assumed to be all equal to a single 'home advantage' parameter.

The reason for the power 1/3 is simple: in modern football leagues, *three* 
league points are awarded for a win, and 1 for a draw.  It is long established
that the Davidson-Beaver model, with its 1/2 power, would always 
reproduce correctly the
final league standings in a full round-robin tournament, provided that the
points system is '2--1--0', i.e., two points for a win and one for a draw.
The appropriate modification for a 3--1--0 points system is to use power 1/3
instead of 1/2.

**The use of power 1/3 is crucial**, for a coherent ranking that 
takes into account schedule strength in football leagues. The use of power 1/3
ensures that whenever schedule-strength differences are *absent*, the model-based 
'retrodictive' ranking agrees exactly (as it surely must!) with the official 
league table.  This is particularly important, of course, at the end
of the season, when the full double round-robin tournament structure
exactly eliminates all schedule-strength differences.

### How are the team strengths determined?

The strengths (and also the value of the draw-prevalence parameter $$\delta$$)
are determined so as to make the above probabilities 
fit as well as possible to the actual match results
seen already.

The standard statistical 
method for this is the method of *maximum likelihood*.  This
method finds the unique values of strengths $$h_i, a_i$$ that yield exact agreement
between:

- the *actual* league points totals to date for each team, home and away; and

- the *expected* league points, as derived from the above model, for the 
matches already played.

It is the choice of **power 1/3** in the model that ensures that the method of 
maximum likelihood has this *exact* relationship with league points.


## The 'schedule strength', 'effective matches played' and 'points per effective match played' summaries

### Expected points per match

The assumed probabilities shown above, for the three possible match outcomes '$$i$$ beats $$j$$', '$$i$$ and $$j$$ draw' and '$$j$$ beats $$i$$', can be used straightforwardly to obtain team $$i$$'s expected points ($$e_{ij,\textrm{home}}$$, say) in the home match against $$j$$. With 3 points for a win and 1 for a draw:
    
$$ e_{ij,\textrm{home}} =
   [3 \times \textrm{pr}(i\textrm{ beats }j\textrm{ at home})] +
    [1 \times \textrm{pr}(\textrm{draw})].$$

Let $$\bar e_i$$ denote the average of all such $$e_{ij,\textrm{home}}$$
    and $$e_{ij,\textrm{away}}$$ values,
   i.e., averaged over all of the matches played by $$i$$ in a whole
   double-round-robin season.  That is, $$\bar e_i$$ is the expected (or projected)
   points per match for team $$i$$ (both home and away)
   over the entire season --- based on all of the
   current
   team-strength values $$\{h_1, a_1, h_2, a_2, \ldots\}$$, and on the current draw-prevalence value $$\delta$$.

The projected, season-long points per match rate $$\bar e_i$$ is precisely
    the **Rate** column that is used to order the _alt-3_ table.

### Expression in terms of 'schedule strength' and 'effective matches played'

For any match in which $$i$$ plays $$j$$, with $$i$$ at home say, we define
    the **schedule strength** of that match for team $$i$$ to be

$$ 1 - {e_{ij,\textrm{home}} \over \bar e_i} .$$

In this way, an 'average' match for $$i$$ has schedule-strength zero.
   Tougher than average matches have positive-valued schedule strength; while
   easier matches than average have negative schedule strength.

The total schedule strength of all of $$i$$'s matches over the whole season
is then (by design) exactly zero.

At any point during the season, we now define the
**effective number of matches played** by team $$i$$, by subtracting $$i$$'s total
_schedule strength_ (to date) from the number of actual matches already
played by $$i$$:
> ePld = Pld &minus; (schedule strength)

And finally we will see the reason for these definitions.  The beauty of
ranking via the _alt-3_ method is that, for $$i$$'s matches already played,
the total league points accumulated by $$i$$ (denoted by **Pts**
 in the league table) is exactly the same as the sum of the model-expected
points --- i.e., precisely the same sum that
appears in $$i$$'s total schedule strength.

So we can now write
   > ePld = Pld &minus; (Pld &minus; Pts / $$\bar e_i$$)
   >      = Pts / $$\bar e_i$$,

and hence the projected whole-season points per match for
$$i$$ can be usefully re-expressed as
   > $$\bar e_i$$ = Pts / ePld.

This provides a cleaner interpretation for that all-important
     **Rate** column in the _alt-3_ table
--- an interpretation that completely avoids any (potentially misleading)
    predictive connotations.  The
**Rate** for any given team is best thought of as
	 **league points gained per
	 effective match played**.

The difference between the actual and effective matches played is the current
(cumulative total)
schedule strength for team $$i$$.  This is the key to understanding the positions
	 of teams on the _alt-3_ table.  For that reason, a graph of
	 every team's match-by-match schedule strength is provided along
	 with the _alt-3_ table itself: just click on any team's name
	 to see the full (current) schedule-strength chart.     
   

   
   












