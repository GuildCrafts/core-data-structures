#! /bin/bash

if test ! $(which python3)
then
  echo "Installing python3..."
  brew install python3
fi

python3 -m unittest -v hashTableTest.py
