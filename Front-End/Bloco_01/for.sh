#!/bin/bash

arquivo=/Users/elaine/turma5/lista.txt

for nomes in `cat $arquivo`
	do 
		echo $nomes
	done
