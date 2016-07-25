#!/usr/bin/env bash

distUrl=$1
gorBin=$2
localPort=$3

# TODO: change real sudo password
echo "theSudoPasswordStandHere" | sudo -S ${gorBin} --input-raw :${localPort} --output-http="${distUrl}"
