#!/bin/bash

DIR=$1
lista=$(ls $DIR | wc -w)

if [ -d "$DIR" ]
then
	echo "O $DIR tem $lista arquivos."
else
	echo "O argumento $DIR não é um diretório!"
fi 
