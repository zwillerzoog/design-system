#!/bin/bash -eli

BRANCH=''
BUILDSTRING='set -x && nvm use ${env.NODE_VERSION} &&'
CHANGED=$(git diff --name-only $BRANCH | xargs -L1 dirname | uniq | cut -d '/' -f2)

if [[ -z $CHANGED ]];
then 
    echo 'Nothing changed, check your git diff.'
else
    for i in $CHANGED; do
      case $i in
        design-system)
          BUILDSTRING='${BUILDSTRING} yarn build &&';
          ;;
        ds-healthcare-gov)
          BUILDSTRING='${BUILDSTRING} yarn build:healthcare &&';
          ;;
        ds-medicare-gov)
          BUILDSTRING='${BUILDSTRING} yarn build:medicare &&';
          ;;
      esac
    done;
fi

BUILDSTRING=$(echo ${BUILDSTRING} | rev | cut -c3- | rev)
echo '.. building: ${BUILDSTRING}'
$BUILDSTRING