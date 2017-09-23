---
title: "The mathematical method explained"
permalink: "/about/the-maths/"
share: true
sidebar:
  - text: "If you want to use the *alt-3.uk* league tables elsewhere, please be sure to read the [License and Disclaimer](/about/license) page first."
---

A full academic research paper, for publication in a peer-reviewed journal, 
is currently (September 2017) in preparation. That paper will contain all the 
details of the *alt-3* method, along with the mathematical justification for its
use to produce routinely better league-table rankings.

For now, we will show here the key mathematical formulae behind the method --- 
for those who enjoy such things!

## The mathematical model

The essence of *alt-3* is to determine a numeric, positive-valued 
*strength*, $$s_i$$,
for each team $$i$$ in the league, on the basis of the team's 
match results to date within the current season.  The scale on which
team strength is measured is such that an 'average' team has strength 
$$s_i = 1$$. 

The strengths $$s_i$$ are formally *parameters in a statistical model* --- 
a model which 
specifies the probability of every possible match outcome for the whole season.

Specifically, when home team $$i$$ plays away team $$j$$, the three possible
match outcomes (that is to say: $$i$$ wins, $$j$$ wins, or a draw) 
are taken to have the following probabilities:

$$\textrm{pr}(i\textrm{ beats }j)={\gamma s_i \over \gamma s_i + s_j + 
\delta(s_i s_j)^{1/3}}$$

$$\textrm{pr}(j\textrm{ beats }i)={s_j \over \gamma s_i + s_j + 
\delta(s_i s_j)^{1/3}}$$

$$\textrm{pr}(\textrm{draw})={\delta(s_i s_j)^{1/3} \over \gamma s_i + s_j + 
\delta(s_i s_j)^{1/3}}$$

The model depends on two further numerical quantities, in addition 
to the team-specific strengths $$s_i$$.  These are:

- $$\boldsymbol\gamma$$**:** the 'home advantage' parameter.  
In football leagues, this
will be a number greater than 1.  For example, a value of
$$\gamma = 1.1$$ would mean that a team's strength is enhanced by 10%
when playing at home.
The *alt-3* model uses the same home-advantage effect for
every team within a league.  
(A more elaborate model, with home advantage allowed to
differ between teams, would not work at all well for our purpose,
since it would confound the interpretation of league tables based upon it.)

- $$\boldsymbol\delta$$**:** the 'prevalence of draws' parameter.  
The specific interpretation
of $$\delta$$ is that the probability of a draw between two average-strength 
teams (that is, teams $$i$$ and $$j$$ with $$s_i = s_j = 1$$), 
in a hypothetical match where neither team has home advantage, is
$$\delta / (2 + \delta)$$.  Thus, for example, the value $$\delta = 1$$ would
imply that the probability of a draw in such a hypothetical match between
average teams is $$1/3$$.

The home-advantage parameter $$\gamma$$ and the draw-prevalence parameter 
$$\delta$$ are taken to be **structural** quantities, meaning that they
can reasonably be assumed to be constant across different seasons of any specific
league.  This allows the values of $$\gamma$$ and $$\delta$$ to be determined
from historical data, for any given league.

There is no reason to suppose that different leagues should share the same
home-advantage or draw-prevalence properties. Indeed, there are some marked
differences between the major leagues in Europe, in regard to the
numerical values of $$\gamma$$ and $$\delta$$ that fit well to historical data. 

### Isn't that just a generalized Bradley-Terry model?

Yes, it is! 

(But that is a nerdy question, of course. 
Don't worry if you have never heard of the
Bradley-Terry model before. The main point of *this* part of the page
is to say briefly where that strange-looking 1/3 power comes from,
in the formulae above --- and why it is important.)

The Bradley-Terry model, and variants of it, are well established in the
ranking of sports players and teams. A well-known example is the 
[Krach](http://www.mscs.dal.ca/~butler/krachexp.htm)
method that is used in US college hockey (i.e., ice hockey). 
And the
[Elo rating](https://en.wikipedia.org/wiki/Elo_rating_system) 
method, well known especially for its use to rank 
chess players, is also closely related to the Bradley-Terry model.

The probabilities shown above are in fact very similar to the model introduced in 
[Davidson and Beaver (1977)](http://www.jstor.org/stable/2529467), 
which extends the Bradley-Terry model to handle
draws (ties) and a home-advantage effect (or 'order effect').  The only material
difference is the **power 1/3** that appears in our formulae above, which
determines how the probability of a draw relates to relative team strengths;
the Davidson-Beaver model has power 1/2 instead.

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

The strengths are determined to make the above probabilities 
fit as well as possible to the actual match results
seen already.

The standard statistical 
method for this is the method of *maximum likelihood*.  This
method finds the unique values of strengths $$s_i$$ that yield exact agreement
between:

- the *actual* league points totals to date; and

- the *expected* league points, as derived from the above model, for the 
matches already played.

(It is the choice of **power 1/3** in the model that ensures that the method of 
maximum likelihood has this *exact* relationship with league points.)

What we actually use in the *alt-3* method, however, is a *penalized* version
of the method of maximum likelihood, which keeps the same exact relationship with
league points, but which performs better in the sense that it routinely 
eliminates implausible probability values. For example, if a particular
team $$i$$ has lost all of its matches to date, the method of maximum likelihood
would deliver $$s_i = 0$$, and hence no chance at all for team $$i$$ to win any 
match in the entire season; and such a degree of certainty would
plainly be unwarranted.

The particular device used in *alt-3*, 
in order to implement penalized maximum likelihood,
is to append to the actual match results a set of imagined 'pre-season' 
matches between each team and a fictitious 'team 0' that has average 
strength, i.e., $$s_0 = 1$$.  Specifically, we suppose that each real team 
wins one match and loses one match against the average 'team 0' (with neither 
team having any home advantage, and with draws disallowed, in these imagined
'pre-season' matches). 

At the start of the season, then, every team has equal strength $$s_i = 1$$. 
The results of real matches played during the season then simply 
update those 'prior' strengths.

## The 'adjusted points per match' and 'schedule strength' summaries

As explained above, the fundamental quantities in the *alt-3* calculation are 
the team strengths $$s_i$$. It is those team strengths that determine the ranking 
in an *alt-3* table.

In each *alt-3* table we present also two further summary columns, labelled
**sched** and **aP/M**.

The *aP/M* or *adjusted points per match* 
summary is always ranked in the same order as the team strengths $$s_i$$:
it is simply an alternative numerical repsesentation of the same ranking.
The *aP/M* value for each team $$i$$ 
is computed simply as the average, across all matches that
$$i$$ plays in the whole season, of

$$\quad [3\times\textrm{pr}(i\textrm{ wins})] + [1\times\textrm{pr}(\textrm{draw})]$$,

with the probabilities as given by the formulae above.

The *sched* or *schedule strength* column is computed, for each team $$i$$, as
the total, over all matches played by $$i$$ to date, of match-specific
opponent strengths defined as follows:

$$\quad s_j/(\gamma + s_j) -1/2\quad$$  (played at home against $$j$$)

$$\quad s_j\gamma/(1 + s_j\gamma) - 1/2\quad$$  (played away against $$j$$)

An 'average' schedule-strength value would be zero.

The schedule strength measure provides fairly direct explanation for
any differences found between the ranking based on *aP/M* and the `standard'
league table based on the 
accumulated points to date. For example, a strongly positive schedule 
strength would correspond to a higher value of *aP/M*.










