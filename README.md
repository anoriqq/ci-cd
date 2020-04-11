# ci-cd [![CircleCI](https://img.shields.io/circleci/build/github/anoriqq/ci-cd?style=flat-square)](https://circleci.com/gh/anoriqq/ci-cd) [![Codecov](https://img.shields.io/codecov/c/github/anoriqq/ci-cd?style=flat-square)](https://codecov.io/gh/anoriqq/ci-cd) [![GitHub last commit](https://img.shields.io/github/last-commit/anoriqq/ci-cd?style=flat-square)](https://github.com/anoriqq/ci-cd/commits) [![Website](https://img.shields.io/website?down_color=red&down_message=down&style=flat-square&up_color=brightgreen&up_message=up&url=https%3A%2F%2Fp.anoriqq.com)](https://p.anoriqq.com)

Studying CI/CD

## About

- Used kubernetes at GKE
- Automated build, test and deploy with CircleCI

## Setup

1. Create cluster on gke

  ```shell
    gcloud beta container --project GCLOUD_PROJECT_ID clusters create 'ci-cd-dev' --zone 'asia-northeast1-b' --release-channel 'stable' --num-nodes '1' --enable-ip-alias --default-max-pods-per-node '10' --enable-autoscaling --min-nodes '1' --max-nodes '3' --max-surge-upgrade 1 --max-unavailable-upgrade 0
  ```

1. Apply k8s objects

  ```shell
    kubectl apply -f ./k8s
  ```

1. Edit app to push to master branch!
