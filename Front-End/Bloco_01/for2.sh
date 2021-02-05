#!/bin/bash

for item in /Users/elaine/turma5/*
	do 
		if [ -d $item ]
		then
			echo "O item $item é um diretório"
		elif [ -f $item ]
		then
			echo "O item $item é um arquivo"
		fi
done
