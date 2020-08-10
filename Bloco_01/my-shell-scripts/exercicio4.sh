#!/bin/bash

path=/Users/elaine/turma5/path.sh

if [ -e $path ]
then
	echo "O caminho $path está habilitado!"
fi

if [ -w path.sh ]
then
	echo "Você tem permissão para editar $path"
else
	echo "Você NÃO foi autorizado a editar $path"
fi

