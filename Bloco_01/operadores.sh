#!/bin/bash

if [ $USER = root ] || [ -x operadores.sh ]
then
	echo "Ou usuário é $USER ou tem permissão sobre o arquivo"
else
	echo "Ou usuário não é $USER ou não tem permissão sobre o arquivo"
fi
