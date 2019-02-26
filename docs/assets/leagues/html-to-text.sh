#!/bin/bash
cat $1 | grep \<table | sed 's/<tr/\n&/g'  | sed 's/<t[hd] /\n&/g' | grep '<t[hd] ' | sed '$d'| sed '/t[hd]-.*1\"/g' | sed '/^$/d' | sed -e 's/<[^>]*>//g' >  $2 
