#!/bin/bash


DAY=$(date +%F)

for FILE in `ls *.png`
	do
		mv $FILE ${DAY}-${FILE}
	done
